/*
	class example
	for a setting
*/


var smoke, tile, station, stain, brownRat

function preload() {
	smoke = loadImage('images/smoke.png');
	tile = loadImage('images/tile.png');
	station = loadImage('images/station.png');
	stain = loadImage('images/stain.png');
	brownRat = loadImage('images/brownRat.png');
}

//position variables for images
 clouds = []; //empty array
var numClouds = 5;

numRat = 3;
var rats =[];

var numStain = 5
var stains = [];



function setup() {
  createCanvas(800, 500);

  //add cloud positions
  let x = -50;
  for(let i = 0; i < numClouds; i++){
    
    let y = random(250,350);

    let cloud = new Thing(x, y, smoke);
    clouds.push(cloud);

    x+= width/numClouds + random(-100,100);
  }

  //add rat positions
  for(let i = 0; i < numRat; i++){
    let x = random(width);
    let y = 455;

    let rat = new Thing(x, y, brownRat);
    rats.push(rat);
  }

  //add stain position
  /*for(let i = 0; i < numStain; i++) {
    let x = random(width);
    let y = random(height);

    let stain = new Thing(x,y,stain);
    stains.push(stain);

  }*/
}


function draw(){

//bg colors
  background('lightblue');

  fill('sandybrown');
  noStroke();
  rect(0,height/2 + 100,width,height/2);

 //images

 

 //tile loop
 	for (let x = -32; x<= width; x += 32){
 		image(tile,x,0);
 		image(tile,x,128);
 		image(tile,x,256);
 		image(tile,x,384);
 	}



 //station name loop
 	for (let x = 32; x <= width + 500; x += 320){
 		image(station, x, 128);
 	}

 //stain loop
 /*	for (let i = 0; i<numStain; i++){
  sstains[i].draw();
 	}*/


//image(brownRat, 100, 455);
//rats
for(let i = 0; i < numRat; i++){
	rats[i].draw();
	
}


//clouds
 	 for(let i = 0; i < numClouds; i++) {
 		clouds[i].draw();


 		
 	}


}




