/*
    new class (following youtube example)
    3/22/2020
*/

var brownRatImage, greyRatImage, grimeImage, smokeImage, stainImage, stationImage, tileImage, platformImage, yellowLineImage

function preload() {
    brownRatImage = loadImage('images/brownRat.png');
    greyRatImage = loadImage('images/greyRat.png');
    grimeImage = loadImage('images/grime.png');
    smokeImage = loadImage('images/smoke.png');
    stainImage = loadImage('images/stain.png');
    stationImage = loadImage('images/station.png');
    tileImage = loadImage('images/tile.png');
    platformImage = loadImage('images/platform.png');
    yellowLineImage = loadImage('images/yellowLine.png');
}

//global values
var smokes = []; //empty array/list
var numSmoke = 5;

var rats = [];
var numRats = 3;

var stains = [];
var numStains = 8;


function setup() {
    createCanvas(800, 600);


    // create our things
    //for loop copied onto line 72 to allow the smoke to be drawn
    for (let i = 0; i < numSmoke; i++) {
        let x = random(width);
        let y = random(300, 400);
        let smoke = new Thing(x, y, smokeImage);
        smokes.push(smoke);
    }

    //stains loop

    for (let i = 0; i < numStains; i++) {
        let x = random(width);
        let y = random(0, 356);
        let stain = new Thing(x, y, stainImage);
        stains.push(stain);
    }

    //rats loop
    for (let i = 0; i < numRats; i++){
        let x = random(width);
        let y = random(384, 588);
        let rat = new Thing(x, y, brownRatImage);
        rats.push(rat);
    }
}

function draw() {
    background('lightblue');



    //platform
    noStroke();
    fill('#EAE9D6');
    rect(0, height * 2 / 3, width, height / 2);
    fill('#2C2913');
    rect(0, height * 9 / 10, width, height / 2);

    //loop starts at -32, as long as X <= width, it will repeat in 32 pixels
    //tiles
    for (let x = -32; x <= width; x += 32) {
        image(tileImage, x, 0);
        image(tileImage, x, 128);
        image(tileImage, x, 256);
    }

    //concrete
    for (let x = -32; x <= width; x += 128) {
        image(platformImage, x, 384);
    }

    //yellow line
    for (let x = -32; x <= width; x += 64) {
        image(yellowLineImage, x, 512)
    }

    //draw stain loop from line 44
    for (let i = 0; i < numStains; i++) {
        stains[i].draw();
    }
    
    for (let i = 0; i < numRats; i++){
        rats[i].draw();
    }

    //draw smoke (loop from line 34)
    for (let i = 0; i < numSmoke; i++) {
        smokes[i].draw();
    }
}
