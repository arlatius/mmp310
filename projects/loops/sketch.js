/*
	loop example
	for a setting
*/


var cloud, boy, tile

function preload() {
	cloud = loadImage('images/cloud.png');
	boy = loadImage('images/boy.png');
	tile = loadImage('images/tile.png');
	station = loadImage('images/station.png');
}

function setup() {
  createCanvas(800, 500);
}

function draw() {

//bg colors
  background('lightblue');

  fill('sandybrown');
  noStroke();
  rect(0,height/2 + 100,width,height/2);

 //images

//cloud loop
 	for (let x = -32; x <= width; x +=200){
 		image(cloud,x,100);
 	}

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

 	


}