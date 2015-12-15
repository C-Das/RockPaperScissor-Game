window.youAndFriend = {

  scoreCard : {
    yourScore : 0 ,
    friendScore : 0 ,
    gameRound : 0 
  }
}

$(document).ready(function(){

  var myFBRef = new Firebase("https://intense-inferno-5737.firebaseIO.com/");

    var userRef = myFBRef.child("scoreTracker");

    userRef.set ({
      gameState : {
        Name :"Chinmay",
        Score :"0",
        noOfRoundsPlayed :"0",
      },
    });

  var user1GameInput, user2GameInput, formInput,numberRounds;

  $("#friendStartButton").on("click",function(){
    $("#numberRoundsForm").show();
    $("#user1Gameform").hide();
    $("#user2Gameform").hide();
    $("#gameInputModal").modal('show');
  });

  $(".form-control").on("focusout",function(){
    formInput = $(this).val().toUpperCase();
    formId = $(this).attr("id");

    console.log ("form id is :"+formId);

    var disabledState = $("#startGameWithFriend").attr("disabled");

    if (!validateInput(formInput) && formId != "numberRounds") {
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

  $("#startGameWithFriend").on("click",function(){
    var dataTag = $("#startGameWithFriend").data("tag");

    console.log("Data Tag :"+dataTag);

    $("#startGameWithFriend").attr("disabled","disabled"); //Added to make sure Hit is not enabled until friend's input is proper
    
    if (dataTag === "numberRounds"){
      numberRounds = $("#numberRounds").val();
      $("#numberRoundsForm").hide();
      $("#user1Gameform").show();
      $("#user2Gameform").hide();
      $("#startGameWithFriend").html("Enter Your Choice!!");
      $("#startGameWithFriend").data("tag","yourInput");

    } else if (dataTag === "yourInput"){
      $("#user1Gameform").hide();
      $("#user2Gameform").show();
      $("#startGameWithFriend").html("Enter Your Friend's Choice!!");
      $("#startGameWithFriend").data("tag","hitToResult");
      user1GameInput = $("#user1GameInput").val().toUpperCase();
    } else {     
      user2GameInput = $("#user2GameInput").val().toUpperCase();
      $("#startGameWithFriend").html("Enter Your Choice!!");
      $("#startGameWithFriend").data("tag","yourInput");
      console.log("User1 Input:"+user1GameInput+"User 2 Game Input :"+user2GameInput);
      decideWinner(user1GameInput,user2GameInput);
      $("#gameInputModal").modal('hide');
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

    if (yourInput === "ROCK"){
        switch (friendInput) {
            case "ROCK" : itIsATie();
              break;
            case "SCISSORS" : youWon();
              break;
            case "PAPER" : friendWon();
              break;
          }
        } else if (yourInput === "PAPER") {
          switch (friendInput) {
            case "ROCK" : youWon();
              break;
            case "PAPER" : itIsATie();
              break;
            case "SCISSORS" : friendWon();
              break;
          }
        } else if (yourInput === "SCISSORS") {
          switch (friendInput) {
            case "ROCK" : friendWon();
              break;
            case "PAPER" : youWon();
              break;
            case "SCISSORS" : itIsATie(); 
              break;
          }
        }
    function youWon(){
        $("#h3YourHeaderPanel").html("You Won this Round!!").css ("color","red");
        $("#h3FriendHeaderPanel").html("Friend Lost!!").css ("color","red");
        $("#pYourHeaderPanel").html("Your Choice was :"+yourInput).css ("color","blue");
        $("#pFriendHeaderPanel").html("Your Friend's Choice was :"+friendInput).css ("color","blue");
        //$("#userScore").html(++scoreTracker.gameState.userScore);
    }
    function friendWon() {
        $("#h3FriendHeaderPanel").html("Friend Won this Round!!").css ("color","red"); 
        $("#h3YourHeaderPanel").html("You Lost!!").css ("color","red");
        $("#pYourHeaderPanel").html("Your Choice was :"+yourInput).css ("color","blue");
        $("#pFriendHeaderPanel").html("Your Friend's Choice was :"+friendInput).css ("color","blue");
        //$("#opponentScore").html(++scoreTracker.gameState.opponentScore);
    }
    function itIsATie() {
      $("#h3YourHeaderPanel,#h3FriendHeaderPanel").html("This is a Tie in this Round!!").css ("color","red");
      $("#pYourHeaderPanel").html("Your Choice was :"+yourInput).css ("color","blue");
      $("#pFriendHeaderPanel").html("Your Friend's Choice was :"+friendInput).css ("color","blue");
    }  
  }
});