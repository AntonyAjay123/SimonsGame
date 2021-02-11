/*var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=0;
var started=false;
//on clicking button
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkAnswer(userChosenColour.length);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
});



//nextSequence
function nextSequence(){
  userClickedPattern=[];
var randomNumber=Math.random();
randomNumber*=3+1;
randomNumber=Math.floor(randomNumber);
var randomChosenColour=buttonColors[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
var audio=new Audio("sounds/"+randomChosenColour+".mp3");
audio.play();
}

//playSound for user chosen colors
function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");
  setTimeout(function(){
    $("."+currentColor).removeClass("pressed");
  },100);
}


function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
  console.log("success");
  if(gamePattern.length==userClickedPattern.length){
    setTimeout(function(){
      nextSequence();
    },1000);
  }
}
  else{$("body").addClass("game-over");
  console.log("wrong");
  startOver();
}
  }
  function startOver(){
    level=0;
    userClickedPattern=[];
    gamePattern=[];
    $("h1").text("Game over.Please restart the game");
    started=false;
  }*/


  //declaring neccassry variables
  var buttonColors=["red","blue","green","yellow"];
  var gamePattern=[];
  var userClickedPattern=[];
  var started=false;
  var level=0;

  //checking for any keypress to start game
  $(document).keypress(function(){
    if(!started){
      nextSequence();
      started=true;
    }

  });


  $(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });

//to generate random randomNumber
  function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColour);
    var audio=new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play();

  }


  function playSound(name){
    var a=new Audio("sounds/"+name+".mp3");
    a.play();
  }


  function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
    },100);

  }

  function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
      console.log("success");
      if(gamePattern.length==userClickedPattern.length)
      {setTimeout(function(){
        nextSequence();
      },1000);
      }
    }
      else{
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
        },200);
        $("h1").text("Game over.Press any key to restart game.");
        startOver();
      }
    }



  function startOver(){
    level=0;
    gamePattern=[];
    started=false;
  }
