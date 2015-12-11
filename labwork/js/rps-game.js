window.scoreTracker = {

  gameState : {
    userScore : 0 ,
    opponentScore : 0 ,
    roundScore : 1
  }
}

$(document).ready(function(){

  var myStrings = ["Rock", "Paper","Scissors"];
  
  $(".btn-info").on("click",function(){
    var randomIndex = Math.floor(Math.random()* myStrings.length);
    $("#addText").html(myStrings[randomIndex]).css("color","red");
  });

  $(".btn-block").on("click",function(e){
    e.preventDefault();

    var idName = $(this).attr("id");
    scoreTracker.gameState[idName]++;

    $("#" +idName).html(scoreTracker.gameState[idName]);

  });

  $("#clickToPlay").on("click",function(e){
    e.preventDefault();

    $("#myModal").modal("show");

    $("#userPlay").on("click",function(e){
      e.preventDefault();

      var userInput = $("#myModal #userInputValue").val();
      var randomIndex = Math.floor(Math.random() * myStrings.length);
      var computerInput = myStrings[randomIndex];

      console.log (computerInput);

      if ()     

    })

  })

});