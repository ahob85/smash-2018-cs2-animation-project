// Global Variables
var p5Canvas;
var myName;
var ballX;
var ballY;
var ballDiameter;
var ballXVelocity;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Teacher");
  ballX = width / 2;
  ballY = height / 2;
  ballDiameter = 100;
  ballXVelocity = 10;
}


function draw() {
  background(0, 255, 0);
  drawBall();
}

function drawBall() {
  var ballRadius = ballDiameter / 2; // local variable, doesn't exist outside this function
  if(ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXVelocity *= -1;
  }
  ballX += ballXVelocity;
  ellipse(ballX, ballY, ballDiameter, ballDiameter);
}
