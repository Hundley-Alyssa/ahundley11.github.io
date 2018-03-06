var flower;

function setup(){
    flower = loadJSON("flower.json");
}

function draw(){
    background(0);
    
    fill(flower.r, flower.g, flower.b);
    text(flower.name, 10, 50);
}

//you do this and will probably get an error - function "setup" because the loadJSON takes a while to execute, but function draw is trying to execute immediately, but it's not finding the values because the loadJSON isn't complete. This next way isn't ultimately the BEST way to do it, but will fix the problem.


var flower; 

function preload(){
    flower = loadJSON("flower.json");
}

function draw(){
    background(0);
    
    fill(flower.r, flower.g, flower.b);
    text(flower.name, 10, 50);
}
