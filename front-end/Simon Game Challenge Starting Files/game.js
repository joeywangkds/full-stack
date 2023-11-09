

let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

let level = 0;

let start = 0;

$(document).keydown(function (event) {
  if (start == 0 && event.key == "a") {
    $("h1").text("Level 0");
    nextSequence();

    start = 1;
    // console.log(start);
  }
});
function nextSequence() {
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  $("h1").text("Level " + level);
  console.log(gamePattern);
}

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  console.log(userClickedPattern);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    console.log(userClickedPattern.length);
    console.log(gamePattern.length);

    if (userClickedPattern.length === gamePattern.length) {
 
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }else{
    console.log("wrong");
    $("body").addClass("game-over");
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 100);
    start = 2;
  }
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}


function restart(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  $("h1").text("Level " + level);
  nextSequence();
  start = 1;
}

$(document).keydown(function () {
  if (start == 2) {
    restart();
    // console.log(start);
  }
});