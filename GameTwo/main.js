var canvas = canvas || document.getElementById("gameCanvas");
var ctx = ctx || canvas.getContext("2d");

/*
            Input
  A           S           D
  |<----Weak  |Strong++++>|
  |   Type    |   Type    |
Melee       Ranged      Magic

*/
var Type = function(name){
  this.name = name;
  console.log(name + " Type.");
};

var Enemy = function(name, type, baseHealth, baseSpeed, color) {
  this.name = name;
  this.type = type;
  this.baseHealth = baseHealth;
  this.baseSpeed = baseSpeed;
  this.color = color;
  var dimension = 50;
  this.dimension = dimension;
  console.log(dimension);
  var x = canvas.width - this.dimension;
  console.log(x);
  this.x = x;
  console.log(name + " is " + type.name + " type." + " Health is: " + baseHealth +
  ", Speed is: " + baseSpeed + ".");
};

var gamePaused = false;

function keyDown(e){
  if(e.keyCode == 32){
    pauseGame();
  }
}

function keyUp(e){

}

var oneFrameTime = 1000 / 60;
var game = window.setInterval(update, oneFrameTime);

var pauseFont = {
  size: 32,
  font: "Mono",
  string: "Game Paused"
};
var pauseString = "Game Paused";

console.log(pauseFont.font);

function pauseGame(){
  if(!gamePaused){
    window.clearInterval(game);
    gamePaused = true;
    console.log(pauseFont.string);
    ctx.font = pauseFont.size.toString() + "px Mono";
    ctx.fillText(pauseFont.string, (canvas.width / 2)
    - ((pauseFont.string.length/2) * (pauseFont.size / 2)), 100);
  } else if(gamePaused){
    game = window.setInterval(update, oneFrameTime);
    gamePaused = false;
    console.log("Game Unpaused.");
  }
}

var playerX = 100;

var playerHealth = 5;
var playerDimension = 50;

function drawPlayer(){
  ctx.beginPath();
  ctx.rect(playerX ,canvas.height - 50, playerDimension, playerDimension);
  ctx.fillStyle = "#3eb48d";
  ctx.fill();
  ctx.closePath();
}

function drawEnemy(enemy){
  ctx.beginPath();
  ctx.rect(enemy.x, canvas.height - 50,enemy.dimension, enemy.dimension);
  ctx.fillStyle = enemy.color;
  ctx.fill();
  ctx.closePath();
}

function updateEnemy(enemy){
  enemy.x -= enemy.baseSpeed;
}

function enemyCollision(enemy){
  if(enemy.x <= playerX + playerDimension){
    console.log("Collision with " + enemy.name);
    enemy.x = canvas.width - enemy.dimension;
    playerHealth--;
    checkPlayerHealth();
    console.log("Player Health: " + playerHealth);
  }
}

function collisionDetection(){
  enemyCollision(testEnemy);
}

function checkPlayerHealth(){
  if(playerHealth <= 0){

  }
}

testType = new Type("Test");
testEnemy = new Enemy("Test Enemy", testType, 100, 5,"#ff0000");

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawPlayer();
  drawEnemy(testEnemy);
}

function update(){
  draw();
  updateEnemy(testEnemy);
  collisionDetection();
}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
