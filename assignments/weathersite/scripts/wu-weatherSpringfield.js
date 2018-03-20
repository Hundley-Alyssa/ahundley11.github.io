var requestURL = 'http://api.wunderground.com/api/6c6ac0c81e933c9a/conditions/q/CO/Springfield.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL, true);

request.send();

request.onload = function(){
    var springfieldWeather = JSON.parse(request.responseText);
    console.log(springfieldWeather);
    
    document.getElementById('weather').innerHTML = springfieldWeather.current_observation.weather;
    
    document.getElementById('high').innerHTML = springfieldWeather.current_observation.temp_f;
    
    document.getElementById('low').innerHTML = springfieldWeather.current_observation.dewpoint_f;
    
    document.getElementById('precipitation').innerHTML = springfieldWeather.current_observation.precip_today_in;
    
    document.getElementById('windSpeed').innerHTML = springfieldWeather.current_observation.wind_mph;
    
}