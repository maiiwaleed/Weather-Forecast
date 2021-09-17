

let searchInput= document.querySelector(".bkgnd input");
let head1= document.querySelector(".row1 .col1 .left");
let head2= document.querySelector(".row1 .col1 .right");



//===========initial display of the program===================

var result;

initialDisp();

async function initialDisp(){  

     var reponse= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8773c2d120a642e2b8c142111211109&q=cairo&days=3`);
 
     result= await reponse.json();
     
      document.querySelector(".row2 .col1 .country").innerHTML=`${result.location.name}`;
 
      document.querySelector(".img-div").innerHTML=` <img class="main-img1" src="https://${result.current.condition.icon}" alt="">`;

      document.querySelector(".row2 .col1 .status").innerHTML=`${result.current.condition.text}`;
 
      document.querySelector(".current h1").innerHTML=`${result.current.temp_c}&degC`;

      //forecast1

      document.querySelector(".row2 .col2 .img2").innerHTML=` <img class="main-img1" src="https://${result.forecast.forecastday[1].day.condition.icon}" alt="">`;

      document.querySelector(".row2 .col2 h1").innerHTML=` ${result.forecast.forecastday[1].day.avgtemp_c}&degC`;
      document.querySelector(".row2 .col2 h2").innerHTML=` ${result.forecast.forecastday[1].day.avgtemp_f}&degF`;
      document.querySelector(".row2 .col2 p").innerHTML=` ${result.forecast.forecastday[1].day.condition.text}`;

      //forecast2

      document.querySelector(".row2 .col3 .img3").innerHTML=` <img class="main-img1" src="https://${result.forecast.forecastday[2].day.condition.icon}" alt="">`;

      document.querySelector(".row2 .col3 h1").innerHTML=` ${result.forecast.forecastday[2].day.avgtemp_c}&degC`;
      document.querySelector(".row2 .col3 h2").innerHTML=` ${result.forecast.forecastday[2].day.avgtemp_f}&degF`;
      document.querySelector(".row2 .col3 p").innerHTML=` ${result.forecast.forecastday[2].day.condition.text}`;

 
     forecast()
 }

//==========================================

searchInput.addEventListener("keydown",onSearch);


async function onSearch(searchVal){  

   searchVal= searchInput.value.toLowerCase();


    var reponse= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8773c2d120a642e2b8c142111211109&q=${searchVal}&days=3`);

    result= await reponse.json();
    
     document.querySelector(".row2 .col1 .country").innerHTML=`${result.location.name}`;

     document.querySelector(".img-div").innerHTML=` <img class="main-img1" src="https://${result.current.condition.icon}" alt="">`;

     document.querySelector(".row2 .col1 .status").innerHTML=`${result.current.condition.text}`;

     document.querySelector(".current h1").innerHTML=`${result.current.temp_c}&degC`;

      //forecast1

      document.querySelector(".row2 .col2 .img2").innerHTML=` <img class="main-img1" src="https://${result.forecast.forecastday[1].day.condition.icon}" alt="">`;

      document.querySelector(".row2 .col2 h1").innerHTML=` ${result.forecast.forecastday[1].day.avgtemp_c}&degC`;
      document.querySelector(".row2 .col2 h2").innerHTML=` ${result.forecast.forecastday[1].day.avgtemp_f}&degF`;
      document.querySelector(".row2 .col2 p").innerHTML=` ${result.forecast.forecastday[1].day.condition.text}`;

      //forecast2

      document.querySelector(".row2 .col3 .img3").innerHTML=` <img class="main-img1" src="https://${result.forecast.forecastday[2].day.condition.icon}" alt="">`;

      document.querySelector(".row2 .col3 h1").innerHTML=` ${result.forecast.forecastday[2].day.avgtemp_c}&degC`;
      document.querySelector(".row2 .col3 h2").innerHTML=` ${result.forecast.forecastday[2].day.avgtemp_f}&degF`;
      document.querySelector(".row2 .col3 p").innerHTML=` ${result.forecast.forecastday[2].day.condition.text}`;
    forecast()
}


 function forecast(){

    var days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    var calendar=new Date();
    
    head1.innerHTML=`${ days[calendar.getDay()] }`;
    head2.innerHTML=`${calendar.getDate()} ${month[calendar.getMonth()]}`;
    document.querySelector(".row1 .col2 p").innerHTML=`${days[calendar.getDay()+1]}`;
    document.querySelector(".row1 .col3 p").innerHTML=`${days[calendar.getDay()+2]}`;
   
    
}

