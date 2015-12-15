window.userNames = {
    user1Name : "" ,
    user2Name : "" 
}
$(document).ready(function(){ 

    $("#playFriendButton").on("click",function(){
      $("#myModal").modal('show');
    });

    $("#startGameWithFriend").on("click",function(){

     // debugger;
    var USERS_LOCATION = 'https://intense-inferno-5737.firebaseIO.com/scoreTracker/';
    var usersRef = new Firebase(USERS_LOCATION);

      user1Name = $("#user1Name").val();
      user2Name = $("#user2Name").val();

    //Checks if the Name does not exist, adds the Name
      console.log("user1"+user1Name+"user2"+user2Name);
      checkIfUserExists(user1Name);
      checkIfUserExists(user2Name);

    function userExistsCallback(userId, exists) {
      if (exists) {
        console.log("User Exists");
      }else{
        var updateGameState = usersRef.child("gameState");
        updateGameState.set({
          "Name" :userId,
          "Score" :"0",
          "noOfRoundsPlayed" :"0",
        });
      }
    }
    // Tests to see if /users/<userId> has any data. 
    function checkIfUserExists(userId) {     
      usersRef.child(userId).once('value', function(snapshot) {
        var exists = (snapshot.val() !== null);
        userExistsCallback(userId, exists);
      });
    }  
      //$(document).load("rps-game-friend.html"); // This is giving syntax error
      
      $("#friendUser1Name").html("userNames.user1Name"); //Issue - Not able to copy the names to secod HTML 
      $("#friendUser2Name").html("userNames.user2Name");
      
      //console.log("User1:"+user1Name+"User2 :"+user2Name);
    });

});