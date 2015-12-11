window.scoreTracker = {

  gameState : {
    userScore : 0 ,
    opponentScore : 0 ,
    gameRound : 0 
  }
}

$(document).ready(function(){

  var myStrings = ["rock", "paper","scissors"];

  $("#startButton").on("clic")
  
  $(".btn-default").on("click",function(){

    $("#gameRound").html(++scoreTracker.gameState.gameRound);

    var randomIndex = Math.floor(Math.random()* myStrings.length);
    var computerChoice = myStrings[randomIndex];
    var userChoice = $(this).data("tag");

    console.log("computer choice :"+computerChoice+"User Choice :" +userChoice);

    if (computerChoice === "rock"){
        switch (userChoice) {
            case "rock" :
              $("#parentPanelHeader").html("This is a Tie !!").css ("color","red");
              break;
            case "scissors" :
              $("#parentPanelHeader").html("Computer Wins!!").css ("color","red"); 
              $("#opponentScore").html(++scoreTracker.gameState.opponentScore);
              break;
            case "paper" :
              $("#parentPanelHeader").html("You Win!!").css ("color","red"); 
              $("#userScore").html(++scoreTracker.gameState.userScore);
              break;
          }
        } else if (computerChoice === "paper") {
          switch (userChoice) {
            case "rock" :
              $("#parentPanelHeader").html("Computer Wins!!").css ("color","red"); 
              $("#opponentScore").html(++scoreTracker.gameState.opponentScore);
              break;
            case "paper" :
              $("#parentPanelHeader").html("This is a Tie !!").css ("color","red");
              break;
            case "scissors" :
              $("#parentPanelHeader").html("You Win!!").css ("color","red"); 
              $("#userScore").html(++scoreTracker.gameState.userScore);
              break;
          }
        } else if (computerChoice === "scissors") {
          switch (userChoice) {
            case "rock" :
              $("#parentPanelHeader").html("You Win!!").css ("color","red"); 
              $("#userScore").html(++scoreTracker.gameState.userScore);
              break;
            case "paper" :
              $("#parentPanelHeader").html("Computer Wins!!").css ("color","red"); 
              $("#opponentScore").html(++scoreTracker.gameState.opponentScore);
              break;
            case "scissors" :
              $("#parentPanelHeader").html("This is a Tie !!").css ("color","red");
              break;
          }
        }

  });

});