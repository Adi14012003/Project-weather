 const api ={
   key: "23a82effeb2d94874e4b2016ce338bd9",
   baseurl: "https://home.openweathermap.org/api_keys", 
  }
 const searchbox = document.querySelector('.search-box');
 searchbox.addEventListener('keypress',setQuery);
 function setquery(evt){
   if (evt.keycode == 13){
     getResults(searchbox.value);
     console.log(searchbox.value);
   }
 }
 function getResults (query){
   fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
   .then(weather=> {
     return weather.json();
    }).then(displayResults);
  }
  function displayResults (weather){
    
    let city= document.querySelector('.location .city');
    city.innerText = '${weather.name} , ${weather.sys.country}';
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = '${Math.round(weather.main.temp)}<span>°c</span>';
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = '${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c';
  }
  function dateBuilder (d) {
    let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day= days[d.getDay()];
    let date = d.getDate();
    let monthy = months[d.getMonth()];
    let year = d.getFullYear();
    return '${day} ${date} ${month} ${year}';
  }