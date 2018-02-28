

var s = document.getElementById("windSpeed");
var h = document.getElementById("high");
var l = document.getElementById("low");

var t = (h+l)/2


function windChill(s, t) {
    
    return 35.74 + (0.6215*t) - (35.75*(Math.pow(s,0.16)) + (0.4275*t)*(Math.pow(s,0.16));
}
    
   document.getElementById("windChill").innerHTML = windChill;                              
                                 

                                  