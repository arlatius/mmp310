/*
	array example
	for a setting
*/


var smoke, boy, tile, station, stain, brownRat, greyRat, grime

function preload() {
	smoke = loadImage('images/smoke.png');
	boy = loadImage('images/boy.png');
	tile = loadImage('images/tile.png');
	station = loadImage('images/station.png');
	stain = loadImage('images/stain.png');
	brownRat = loadImage('images/brownRat.png');
	greyRat = loadImage('images/greyRat.png');
	gime = loadImage('images/grime.png');
}

//position variables for images
var cloudX = []; //empty array
var cloudY = [];
var numClouds = 5;
var ratX = [];
var ratSpeed =[];
var stainX = [];
var stainY = [];
var cloudSpeed = [];

function setup() {
  createCanvas(800, 500);

  //add cloud positions
  for(let i = 0; i < numClouds; i++){
  	let x = -50;
  	cloudX.push( random(width) );
  	cloudY.push(random(250,350));
  	cloudSpeed.push(random(1,2));
  	stainX.push(random(width));
  	stainY.push(random(height));
  	ratX.push(random(width));
  	ratSpeed.push(random(2,3));

  	//update x, distributing number of clouds across canvas
  	x += width/numClouds
  }
  console.log(cloudX);
}

function draw(){
	 //cloud loop
 	/*for (let x = -500; x <= width; x +=100){
 		let offset = random(-50,50);
 		let y = random(250, 350);
 		image(smoke,x + offset,y);

 	}	*/


 	


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
 	for (let i = 0; i<5; i++){
 image(stain, stainX[i], stainY[i]);
 	}


image(brownRat, 100, 455);
image(greyRat, 250, 455);
//rats
for(let i = 0; i < 3; i++){
	image(brownRat,ratX[i],455);
	ratX[i] += ratSpeed[i] +random(1,2);
	if(ratX[i] > width) {
		ratX[i] = -brownRat.width
	}
}


//clouds
 	 for(let i = 0; i < numClouds; i++) {
 		image(smoke, cloudX[i], cloudY[i]);

 		//animate x
 		cloudX[i] += cloudSpeed[i] + random(-0.5, 0.5);

 		if (cloudX[i] > width) {
 			cloudX[i] = -smoke.width
 		}
 	}


}


//im not sure what else i should do rn 3/4/20




