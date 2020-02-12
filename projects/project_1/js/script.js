

//My variables for my rockets and blast off button.
let $rocket;
let $rocketFire;
//My blastoff button
let $blastoff;
//The giveup button
let $giveup;



$(document).ready(function() {

//Using the jquery so the player can click on the start screen with...
//...with the play function as the event handler.
$("#start").on('click',play);
//My initial play function to start the game on click
function play(){
//First step is removing the start id alongside it's start_screen image.
  $("#start").remove();
//Then the wrapper class(containing everything) is given the wrapper-play...
//...class which adds the night_sky background
  $(".wrapper").addClass("wrapper-play");
  loadimage()
//Declaring my button variables contain the proper id elements
  $blastoff = $('#blastoff');
  $giveup = $('#giveup');

//Setting up my jquery .on functions so when clicked they trigger the proper...
//...functions
  $blastoff.on('click', takeoff);
  $giveup.on('click', endgame);
}

//Creating my function which will end the game and show a message if the player..
//...clicks give up.
function endgame(){

}

});

//Loading my images
function loadimage(){
 $(".rocket").html("<img src='assets/rocket.png' class='rocketimg'>");
 $("#blastoff").html("<img src='assets/launch_button.png' class='launchimg'>");
 $("#giveup").html("<img src='assets/give_up_button.png' class='giveupimg'>");

}

//My takeoff function so my rockets will know what to do.
function takeoff() {

}
