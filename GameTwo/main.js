var canvas = canvas || document.getElementById("gameCanvas");
var ctx = ctx || canvas.getContext("2d");

/*
            Input
  A           S           D
  |<----Weak  |Strong++++>|
  |   Type    |   Type    |
Melee       Ranged      Magic

*/
var type = function(name){
  this.name = name;
  console.log(name + " Type.");
};

var enemy = function(name, type, baseHealth, baseSpeed) {
  this.name = name;
  this.type = type;
  this.baseHealth = baseHealth;
  this.baseSpeed = baseSpeed;
  console.log(name + "is " + type + " type");
};

function drawPlayer(){
  ctx.beginPath();
  ctx.rect(100,canvas.height - 50,50,50);
  ctx.fillStyle = "#3eb48d";
  ctx.fill();
  ctx.closePath();
}

function drawEnemy(enemy){

}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawPlayer();
}

draw();
