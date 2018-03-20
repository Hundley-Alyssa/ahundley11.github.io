var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL, true);

request.send();

request.onload = function(){
    var data = JSON.parse(request.responseText);
    console.log(data);
    
    document.getElementById('franklinMotto').innerHTML = data.towns[0].motto;
    
    document.getElementById('franklinYear').innerHTML = data.towns[0].yearFounded;
    
    document.getElementById('franklinPopulation').innerHTML = data.towns[0].currentPopulation;
    
    document.getElementById('franklinRain').innerHTML = data.towns[0].averageRainfall;
    
    document.getElementById('greenvilleMotto').innerHTML = data.towns[1].motto;
    
    document.getElementById('greenvilleYear').innerHTML = data.towns[1].yearFounded;
    
    document.getElementById('greenvillePopulation').innerHTML = data.towns[1].currentPopulation;
    
    document.getElementById('greenvilleRain').innerHTML = data.towns[1].averageRainfall;
    
    document.getElementById('springfieldMotto').innerHTML = data.towns[3].motto;
    
    document.getElementById('springfieldYear').innerHTML = data.towns[3].yearFounded;
    
    document.getElementById('springfieldPopulation').innerHTML = data.towns[3].currentPopulation;
    
    document.getElementById('springfieldRain').innerHTML = data.towns[3].averageRainfall;
}

