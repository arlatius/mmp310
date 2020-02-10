/*
	final story sketch 
	2/10/2020

	credits:
	sprites ripped from spriters-resource.com/nintendo_switch/fireemblemthreehouses/

	narration by john mulaney
    
    slideshow code taken from my own presentation last semester
    https://github.com/arlatius/mmp210/blob/master/Projects/finalPresentation/sketch.js

    school png
    http://clipart-library.com/clipart/yckKnpbxi.htm
*/

var slideNumber = 0;
var totalSlides = 5;

var nextBtnX = 100;
var nextBtnY = 200;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnW = 100;
var prevBtnH = 50;

//loading graphics

var claude, claudeRight, dimitri, youngDimitri, byleth, edelgard, blackboard, school;

//runs before setup, when preload is done setup gets called
function preload(){

	claude = loadImage('images/Claude.png')
	dimitri = loadImage('images/Dimitri.png')
	youngDimitri = loadImage('images/YoungDimitri.png')
	byleth = loadImage('images/Byleth.png')
	edelgard = loadImage('images/Edelgard.png')
	claudeRight = loadImage('images/ClaudeRight.png')
	blackboard = loadImage('images/Blackboard.png')
	school = loadImage('images/School.png')
}

//location variables

var claudeX = 1000;
var claudeY = 200;
var dimitriX = 100;
var dimitriY = 200;
var youngDimitriX = 350;
var youngDimitriY = 650;

var story1 = "Your opinion doesn't matter in elementary school either.";
var story2 = "It matters in college. College is just your opinion.";
var story3 = "Just you raising your hand and being like,";
var story4 = "I think Emily Dickinson's a lesbian.";
var story5 = "And they're like, 'Partial credit.' And thats a whole thing.";

//elementary school, college, classroom
var currentSetting = "elementary";


function setup() {
	createCanvas(1960, 1150);
}
function draw(){

	//conditional statement
	imageMode(CENTER);
	if(currentSetting == "elementary") {
		elementary();
	} else if (currentSetting == "college") {
		college();
	} else if (currentSetting == "classroom") {
		classroom();
	}

function elementary(){
	background('lightblue');
	fill('green');
	rect(0, height * 2/3, width, height * 1/3);
	image(school,width/2,height/2,700,700);
}
function college(){
	background('lightblue');
	fill('green');
	rect(0, height * 2/3, width, height * 1/3);
	fill('grey');
	rect(width/2,height/2,700,700);
}
function classroom(){
	background('#8D5725');
	fill('#653910');
	rect(0, height * 2/3, width, height * 1/3);
	image(blackboard,width/2,height/2);
}




/* TEST

	image(claude, claudeX, claudeY);
	image(dimitri, dimitriX, dimitriY);
	image(youngDimitri, youngDimitriX, youngDimitriY);
	image(byleth, dimitriX, dimitriY);
	image(edelgard, dimitriX, dimitriY);
	*/

	//narration: text('string', X position, Y position, width, height)
fill('black');
stroke('white');
strokeWeight(4);
imageMode(CORNER);

if (slideNumber == 0 ){
	currentSetting = "elementary"
	
	image(youngDimitri, youngDimitriX, youngDimitriY);
	image(claude, claudeX, claudeY);

	textSize(50);
	textAlign(CENTER,CENTER);
	text(story1, width/2, 100);

} else if (slideNumber == 1){
	currentSetting = "college";
	image(dimitri, dimitriX, dimitriY);
	image(claude, claudeX, claudeY);

	textSize(50);
	textAlign(CENTER,CENTER);
	text(story2, width/2, 100);

} else if (slideNumber == 2){

	image(claudeRight, dimitriX, dimitriY);
	image(byleth, claudeX, claudeY);

	textSize(50);
	textAlign(CENTER,CENTER);
	text(story3, width/2, 100);

	currentSetting = "classroom";

} else if (slideNumber == 3){
	image(edelgard, dimitriX + 200, dimitriY);
	image(claudeRight, dimitriX, dimitriY);
	image(byleth, claudeX, claudeY);

	textSize(50);
	textAlign(CENTER,CENTER);
	text(story4, width/2, 100);

	textSize(20);
	textAlign(CENTER,CENTER);
	text('"Emily Dickinson"', width/2 + 120, 700);

} else if (slideNumber == 4){
	image(claudeRight, dimitriX, dimitriY);
	image(byleth, claudeX, claudeY);

	textSize(50);
	textAlign(CENTER,CENTER);
	text(story5, width/2, 100);
}


 // next btn
  if (slideNumber < totalSlides - 1) {
    fill(255);
    noStroke();
    ellipse(nextBtnX, nextBtnY, nextBtnSize);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Next", nextBtnX, nextBtnY);
  }


  // prev btn
  if (slideNumber > 0) {
    fill(255);
    noStroke();
    rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
    fill(0);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Previous", prevBtnX + 10, prevBtnY + 10);
  }

	
}

function mousePressed() {

  // next btn
  var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
  if (d < nextBtnSize / 2 && slideNumber < totalSlides - 1) {
    slideNumber++;
  }

  // prev btn
  if (mouseX > prevBtnX &&
    mouseX < prevBtnX + prevBtnW &&
    mouseY > prevBtnY &&
    mouseY < prevBtnY + prevBtnH &&
    slideNumber > 0) {
    slideNumber--;
  }
}
