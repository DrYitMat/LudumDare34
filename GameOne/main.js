var myGame = myGame || {};
var canvas = canvas || document.getElementById("gameCanvas");
var ctx = ctx || canvas.getContext("2d");

myGame.globalVars = {

}

var playerX = canvas.width/2;
var playerDimension = 50;
var playerY = canvas.height - playerDimension;

var playerSpeed = 30;
var leftPressed = false;
var rightPressed = false;

function keyDownHandler(e){
  if(e.keyCode == 37 || e.keyCode == 65){
    leftPressed = true;
  } else if(e.keyCode == 39 || e.keyCode == 68){
    rightPressed = true;
  }
}

function keyUpHandler(e){
  if(e.keyCode == 37 || e.keyCode == 65){
    leftPressed = false;
  } else if(e.keyCode == 39 || e.keyCode == 68){
    rightPressed = false;
  }
}

function checkInput(){
  if(rightPressed && playerX < canvas.width - playerDimension){
    playerX += playerSpeed;
  } else if(leftPressed && playerX > 0){
    playerX -= playerSpeed;
  }
}

function drawPlayer(){
  ctx.beginPath();
  ctx.rect(playerX,playerY,playerDimension,playerDimension);
  ctx.fillStyle = "#c2c2c2";
  ctx.fill();
  ctx.closePath();
}

var rainWidth = 5;
var rainMinHeight = 10;
var rainMaxHeight = 25;
var rainPadding = 5;

var currentRain = 0;
var maxRain = 100;
var minRain = 50;

var rainArray = [];

function

function drawRain(){
  currentRain = rainArray.length;
  var rainNeeded = Math.floor((Math.random() * maxRain) + minRain)
  if(currentRain < rainNeeded){
    for(var a = currentRain; a < rainNeeded; a++ ){
      var h = Math.floor((Math.random() * rainMaxHeight) + rainMinHeight);
      var c = '#'+Math.floor(Math.random()*16777215).toString(16);
      var px = a*(rainWidth+rainPadding);
      rainArray.push({key:currentRain.toString(), x:px, y:0,
         width:rainWidth, height:h, color:c, status: 1 });
    }
  }
  ctx.beginPath();
  ctx.rect(50,50,5,50);
  ctx.fillStyle = "rgb(242, 241, 111)";
  ctx.fill();
  ctx.closePath();
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawPlayer();
  drawRain();
}

function update(){
  draw();
  checkInput();
  requestAnimationFrame(update);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

update();
