var car,wall;
var speed,weight;
var deformation;
var invWall;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  wall.depth = car.depth - 1;
  invWall = createSprite(1400,200,50,50);
  invWall.visible = false;
  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(0);  
  car.velocityX = speed;
  if(isTouching(car,invWall)&&(deformation >= 180)) {
    speed = 0;
    car.shapeColor = "red";
  }
  if(isTouching(car,invWall)&&(deformation <= 100)) {
    speed = 0;
    car.shapeColor = "green";
  }
  if(isTouching(car,invWall)&&(deformation >= 99 && deformation<= 179)) {
    speed = 0;
    car.shapeColor = "yellow";
  }
  drawSprites();
}
function isTouching(car,wall) {
  if(car.x - wall.x < car.width/2 + wall.width/2 && 
    wall.x - car.x < wall.width/2 + wall.width/2 && 
    car.y - wall.y < car.height/2 + wall.height/2 &&
    wall.y - car.y < wall.height/2 + car.height/2) {
    return true
  }
  else {
    return false
  }
}