var requestURL = 'data/service.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL, true);

request.send();

request.onload = function () {
    var data = JSON.parse(request.responseText);
    console.log(data);

    document.getElementById('service1').innerHTML = data.services[0].name;
    document.getElementById('service2').innerHTML = data.services[1].name;
    document.getElementById('service3').innerHTML = data.services[2].name;
    document.getElementById('service4').innerHTML = data.services[3].name;
    document.getElementById('service5').innerHTML = data.services[4].name;
    
    document.getElementById('price1').innerHTML = data.services[0].price;
    document.getElementById('price2').innerHTML = data.services[1].price;
    document.getElementById('price3').innerHTML = data.services[2].price;
    document.getElementById('price4').innerHTML = data.services[3].price;
    document.getElementById('price5').innerHTML = data.services[4].price;
    
}