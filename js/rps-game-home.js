window.userNames = {
    user1Name : "" ,
    user2Name : "" 
}
$(document).ready(function(){ 

    $("#playFriendButton").on("click",function(){
      $("#myModal").modal('show');
    });

    $("#startGameWithFriend").on("click",function(){

      user1Name = $("#user1Name").val();
      user2Name = $("#user2Name").val();

      //$(document).load("rps-game-friend.html"); // This is giving syntax error
      
      $("#friendUser1Name").html("userNames.user1Name"); //Issue - Not able to copy the names to secod HTML 
      $("#friendUser2Name").html("userNames.user2Name");
      
      //console.log("User1:"+user1Name+"User2 :"+user2Name);
    });

});