$(document).ready(function(){

    $("#playerNames").hide();
    
    $("#playFriendButton").on("click",function(){
        $("#playComputerButton,#playFriendButton").hide();
        $("#playerNames").show();
    });
});