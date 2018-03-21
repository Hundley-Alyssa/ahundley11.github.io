var requestURL = 'http://api.wunderground.com/api/6c6ac0c81e933c9a/conditions/q/MN/Franklin.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL, true);

request.send();

request.onload = function () {
    var franklinWeather = JSON.parse(request.responseText);
    console.log(franklinWeather);

    document.getElementById('weather').innerHTML = franklinWeather.current_observation.weather;

    document.getElementById('high').innerHTML = franklinWeather.current_observation.temp_f;

    document.getElementById('low').innerHTML = franklinWeather.current_observation.dewpoint_f;

    document.getElementById('precipitation').innerHTML = franklinWeather.current_observation.precip_today_in;

    document.getElementById('windSpeed').innerHTML = franklinWeather.current_observation.wind_mph;


}