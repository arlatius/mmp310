/*
	loop example
	for a setting
*/


var smoke, boy, tile

function preload() {
	smoke = loadImage('images/smoke.png');
	boy = loadImage('images/boy.png');
	tile = loadImage('images/tile.png');
	station = loadImage('images/station.png');
}

function setup() {
  createCanvas(800, 500);

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

 //cloud loop
 	for (let x = -500; x <= width; x +=200){
 		let offset = random(-50,50);
 		let y = random(250, 350);
 		image(smoke,x + offset,y);
 	}	


}