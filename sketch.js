var ball,img,paddle, paddleImg, ballImg;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200);
  paddle = createSprite(350, 200);
  
  /* assign the images to the sprites */
  ball.addAnimation("Squash ball", ballImg);
  paddle.addAnimation("Player paddle", paddleImg);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

     randomVelocity();

  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges[1]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = +3;
  }
  drawSprites();
  
}

function randomVelocity()
{
  vY = (-3,-2,-1,0,1,2,3);
  
  ball.velocityY = random(vY);
}

