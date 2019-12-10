var doorOpen = 0;
var ready = -1;
var endMsg = "";
var c;

function setup() {
  createCanvas(600, 550);
  background(241,238,229);
  //c = 'blue'
}

function draw() {
  var d = 220;
  // Reset background
	if(mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 30) {
    background(241,238,229)
    //stroke();
  }
  noStroke();
  // Entrance Box
  textSize(15);
  fill(50,59,32);
  rect(30,0, 90, 20);
  fill(241,238,229);
  text("ENTRANCE", 34, 15);
  
  // Exit Box
  fill(241,238,229);
  rect(530,0, 70, 10);
  
  
  // Obstacles and Walls
  fill(129,146,75);
  // Big Walls
  rect(0,0, 30, 550);
  rect(120,0, 80, 420);
  rect(200,340, 200, 80);
  rect(0,480, 600, 70);
  rect(460,280, 50, 200);
  rect(570,200, 50, 220);
  rect(280,0, 40, 120);
  rect(280,180, 320, 50);
  rect(380,90, 40, 100);
  // End Maze
  rect(480,0, 50, 120);
  rect(320,0, 170, 20);
  rect(570,0, 30, 180);
  // Bubble Run
  ellipse(120,80, 80);
  ellipse(20,180, 110);
  ellipse(120,300, 100);
  ellipse(20, 430, 120);
  ellipse(160,415, 80);
  ellipse(320,520, 130);
  ellipse(200,160, 100);
  ellipse(360, 340, 80);
  
  

  
  // Play
  if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 20) {
    ready = 1;
    endMsg = "";
    c = "orange";
  }
  if(ready == 1) {
    strokeWeight(4);
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  // Win Scenario
  if(ready == 1 && mouseX > 530 && mouseX < 600 && mouseY > 0 && mouseY < 10) {
    // Speed Cheat Check
  	if(dist(pmouseX,pmouseY, mouseX,mouseY) > 20) {
    	ready = 0;
    	endMsg = "Slow Down!";
    	c = "orange";
  	} else {
      endMsg = "You Win!";
    	c = "red";
    }
  }
  // Opening message
  if(ready == -1) {
    endMsg = "GOOD LUCK!";
    c = (50,59,32);
  }
  	textSize(70);
    fill(c);
    text(endMsg, width/2-200, height/2);
  
  // Lose Scenarios
	// // Big Walls
    // rect(0,0, 30, 550);
  if(mouseX > 0 && mouseX < 30 && mouseY > 0 && mouseY < 550) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange";
  }
	// rect(120,0, 80, 420);
  if(mouseX > 120 && mouseX < 200 && mouseY > 0 && mouseY < 420) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange";
  }
 	// rect(200,340, 200, 80);
  if(mouseX > 200 && mouseX < 400 && mouseY > 340 && mouseY < 420) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange";
  }
  // rect(0,480, 600, 70);
  if(mouseX > 0 && mouseX < 600 && mouseY > 480 && mouseY < 550) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange";
  }
	// rect(460,280, 50, 200);
  if(mouseX > 460 && mouseX < 510 && mouseY > 280 && mouseY < 480) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  // rect(570,200, 50, 220);
  if(mouseX > 570 && mouseX < 620 && mouseY > 200 && mouseY < 420) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  // rect(280,0, 40, 80);
  if(mouseX > 280 && mouseX < 320 && mouseY > 0 && mouseY < 80) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  // rect(280,180, 320, 50);
  if(mouseX > 280 && mouseX < 600 && mouseY > 180 && mouseY < 230) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  // rect(380,90, 40, 100);
  if(mouseX > 380 && mouseX < 420 && mouseY > 90 && mouseY < 190) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  // // End Maze
	// rect(480,0, 50, 120);
  if(mouseX > 480 && mouseX < 530 && mouseY > 0 && mouseY < 120) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  // rect(320,0, 170, 20);
  if(mouseX > 320 && mouseX < 490 && mouseY > 0 && mouseY < 20) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  // rect(570,0, 30, 180);
  if(mouseX > 570 && mouseX < 600 && mouseY > 0 && mouseY < 180) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  
  // Outside the canvas
  if(mouseX > width || mouseX < 0 || mouseY > height || mouseY < 2) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  if(mouseX == 0 && mouseY == 0)
    ready = -1;

 
  // // Bubble Run
	// ellipse(120,80, 80);
  if(dist(120,80, mouseX,mouseY) < 40) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
 
  // ellipse(20,180, 110);
  if(dist(20,180, mouseX,mouseY) < 50) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }

  // ellipse(120,300, 100);
	if(dist(120,300, mouseX,mouseY) < 50) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }

  // ellipse(20, 430, 120);
  if(dist(20,430, mouseX,mouseY) < 60) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  
  // ellipse(160, 415, 80);
  if(dist(160,415, mouseX,mouseY) < 40) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
 
  // ellipse(320, 520, 130);
  if(dist(320,520, mouseX,mouseY) < 69) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }

  // ellipse(200, 160, 100);
	if(dist(200,160, mouseX,mouseY) < 50) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }

  // ellipse(360, 340, 120);
  if(dist(360,340, mouseX,mouseY) < 40) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = "orange"
  }
  

}