// Global Variables
var p5Canvas;
var myName;
var ballX;
var ballY;
var ballRadius;
var ballXVelocity;
var ballGrowth;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Teacher");
  ballX = width / 2;
  ballY = height / 2;
  ballRadius = 50;
  ballXVelocity = 10;
  ballGrowth = 10;
}


function draw() {
  background(0, 255, 0);
  drawBall();
}

function drawBall() {
  if(ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXVelocity *= -1;
  }
  var circumference = getCircumference(); // local variable
  if(circumference >= 600 || circumference <= 160) {
    ballGrowth *= -1;
  }
  ballX += ballXVelocity;
  ballRadius += ballGrowth;
  var ballDiameter = ballRadius * 2; // local variable
  fill("orange");
  ellipse(ballX, ballY, ballDiameter, ballDiameter);
}

function getCircumference() {
  return 2 * PI * ballRadius;
}
