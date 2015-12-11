window.scoreTracker = {

  gameState : {
    userScore : 0 ,
    opponentScore : 0 ,
    gameRound : 0 
  }
}

$(document).ready(function(){

  var myStrings = ["rock", "paper","scissors"];

  $("#childPanel").hide(); // Hides the game panel at the page load.

  $("#startButton").on ("click",function(){
    
    $("#headerPanelJumbotron").hide(); 
    $("#childPanel").show(); //Improve to show slowly
  
  }); // Clicking on "Start", loads the Game Panel.

  $("#resetButton").on("click",function(){
    scoreTracker.gameState.userScore = 0;
    scoreTracker.gameState.opponentScore = 0;
    scoreTracker.gameState.gameRound = 0;
    $("#userScore").html(scoreTracker.gameState.userScore);
    $("#opponentScore").html(scoreTracker.gameState.opponentScore);
    $("#gameRound").html(scoreTracker.gameState.gameRound);
    $("#parentPanelHeader").html("Rock-Paper-Scissors Game !!!").css ("color","black"); 
    $("#childPanel").hide();
    $("#headerPanelJumbotron").show(); 
  }); //Reset will initialize the global variables and update html tags in the app.
  
  $(".btn-default").on("click",function(){

    $("#gameRound").html(++scoreTracker.gameState.gameRound);

    var randomIndex = Math.floor(Math.random()* myStrings.length);
    var computerChoice = myStrings[randomIndex];
    var userChoice = $(this).data("tag");

    console.log("computer choice :"+computerChoice+"User Choice :" +userChoice);

    /* The game has only three possible outcomes other than a tie: a player who decides to play rock 
    will beat another player who has chosen scissors ("rock crushes scissors") but will lose to one 
    who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors 
    ("scissors cut paper"). If both players throw the same shape, the game is tied and is usually 
    immediately replayed to break the tie. */

    if (computerChoice === "rock"){
        switch (userChoice) {
            case "rock" : itIsATie();
              break;
            case "scissors" : computerWon();
              break;
            case "paper" : youWon();
              break;
          }
        } else if (computerChoice === "paper") {
          switch (userChoice) {
            case "rock" : computerWon();
              break;
            case "paper" : itIsATie();
              break;
            case "scissors" : youWon();
              break;
          }
        } else if (computerChoice === "scissors") {
          switch (userChoice) {
            case "rock" : youWon();
              break;
            case "paper" : computerWon();
              break;
            case "scissors" : itIsATie(); 
              break;
          }
        }

    function youWon(){
        $("#parentPanelHeader").html("You Win!!").css ("color","red"); 
        $("#userScore").html(++scoreTracker.gameState.userScore);
    }
    function computerWon() {
        $("#parentPanelHeader").html("Computer Wins!!").css ("color","red"); 
        $("#opponentScore").html(++scoreTracker.gameState.opponentScore);
    }
    function itIsATie() {
      $("#parentPanelHeader").html("This is a Tie !!").css ("color","red");
    }
  });

});