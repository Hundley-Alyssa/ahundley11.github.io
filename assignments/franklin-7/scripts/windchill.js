//JavaScript (put at the bottom near the </body>)

           
var s = parseInt(document.getElementById("windSpeed").innerHTML);
var h = parseInt(document.getElementById("high").innerHTML);
var l = parseInt(document.getElementById("low").innerHTML);


var t = (h+l)/2;

document.getElementById("windChill").innerHTML = (35.74 + (0.6215*t) - (35.75*(Math.pow(s,0.16))) + ((0.4275*t)*(Math.pow(s,0.16)))).toFixed(2);
