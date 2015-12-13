$(document).ready(function(){

  var user1GameInput, user2GameInput, formInput;

  $("#friendStartButton").on("click",function(){
    $("#user1Gameform").show();
    $("#user2Gameform").hide();
    $("#gameInputModal").modal('show');
  });

  $(".form-control").on("focusout",function(){
    formInput = $(this).val().toUpperCase();

    var disabledState = $("#startGameWithFriend").attr("disabled");

    if (!validateInput(formInput)) {
      $("#modalMessage").html("The value should be 'Rock' or 'Paper' or 'Scissors'. Please enter again.")
        .css("color","red")
        .css("text-align","left");
    } else {

      $("#modalMessage").empty();

      if (disabledState === "disabled"){
      $("#startGameWithFriend").removeAttr("disabled");
      }
    }

  });

  startGameWithFriend

  $("#startGameWithFriend").on("click",function(){
    var dataTag = $("#startGameWithFriend").data("tag");
    
    console.log("Data Tag :"+dataTag);
    
    if (dataTag === "userInput"){
      $("#user1Gameform").hide();
      $("#user2Gameform").show();
      $("#startGameWithFriend").html("Hit to Decide!!");
      $("#startGameWithFriend").data("tag","hitToResult");
      user1GameInput = $("#user1GameInput").val().toUpperCase();
    } else {     
      user2GameInput = $("#user2GameInput").val().toUpperCase();
      console.log("User1 Input:"+user1GameInput+"User 2 Game Input :"+user2GameInput);
      decideWinner(user1GameInput,user2GameInput);
    }

  });

  function validateInput(gameValue) {
    var returnValue = 0;
    console.log("Game Value :" +gameValue);
    switch (gameValue) {
      case "ROCK" : 
        returnValue = 1;
      case "SCISSORS" : 
        returnValue = 1;
      case "PAPER" : 
        returnValue = 1;

    console.log("Return Value :" +returnValue);

    return returnValue;
    }
  }
  function decideWinner(yourInput, friendInput){

    console.log("Inside decideWinner function. your Input :"+yourInput+"friend Input :"+friendInput);

    /* The game has only three possible outcomes other than a tie: a player who decides to play rock 
    will beat another player who has chosen scissors ("rock crushes scissors") but will lose to one 
    who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors 
    ("scissors cut paper"). If both players throw the same shape, the game is tied and is usually 
    immediately replayed to break the tie. */

    if (yourInput === "rock"){
        switch (friendInput) {
            case "rock" : itIsATie();
              break;
            case "scissors" : youWon();
              break;
            case "paper" : friendWon();
              break;
          }
        } else if (yourInput === "paper") {
          switch (friendInput) {
            case "rock" : youWon();
              break;
            case "paper" : itIsATie();
              break;
            case "scissors" : friendWon();
              break;
          }
        } else if (yourInput === "scissors") {
          switch (friendInput) {
            case "rock" : friendWon();
              break;
            case "paper" : youWon();
              break;
            case "scissors" : itIsATie(); 
              break;
          }
        }
    function youWon(){
        $("#h3yourHeaderPanel").val("You Won this Round!!").css ("color","red"); 
        //$("#userScore").html(++scoreTracker.gameState.userScore);
    }
    function friendWon() {
        $("#h3FriendHeaderPanel").val("Computer Won this Round!!").css ("color","red"); 
        //$("#opponentScore").html(++scoreTracker.gameState.opponentScore);
    }
    function itIsATie() {
      $("#h3yourHeaderPanel,#h3FriendHeaderPanel").val("This is a Tie in this Round!!").css ("color","red");
    }  
  }
});