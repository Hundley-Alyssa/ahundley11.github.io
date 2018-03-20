var requestURL = 'http://api.wunderground.com/api/6c6ac0c81e933c9a/conditions/q/SC/Greenville.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL, true);

request.send();

request.onload = function(){
    var greenvilleWeather = JSON.parse(request.responseText);
    console.log(greenvilleWeather);
    
    document.getElementById('weather').innerHTML = greenvilleWeather.current_observation.weather;
    
    document.getElementById('high').innerHTML = greenvilleWeather.current_observation.temp_f;
    
    document.getElementById('low').innerHTML = greenvilleWeather.current_observation.dewpoint_f;
    
    document.getElementById('precipitation').innerHTML = greenvilleWeather.current_observation.precip_today_in;
    
    document.getElementById('windSpeed').innerHTML = greenvilleWeather.current_observation.wind_mph;
    
}