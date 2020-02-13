

//My variables for my rockets and blast off button.
let $rocket;
let $rocketFire;
//My blastoff button
let $blastoff;
//The giveup button
let $giveup;
//So we can later makes this false to restrict only one rocket creation...
//...at a time.
let createRocket =true;
//Variable for my sound
let fireSound;



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
//Loading and defining my rockets launch sound for the takeoff function.
  fireSound= document.createElement("AUDIO");
fireSound.setAttribute("src","../assets/missile_launch.mp3");
document.body.appendChild(fireSound);

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

//Assigning the correct value to the rocket variable so it selects the first...
//...non airborn rocket.
  let $rocket = $('.rocket').not('.airborn').first();

//A conditional ensuring there is a rocket present.
  if ($rocket.length !== 0) {
//This ensures you can only create one rocket at a time.
    if(createRocket ===true){

      let newRocket = $("<div class = 'rocketBegin'>");
//Assigning the new rocket the rocket image and it's new class.
  $(newRocket).html("<img src='assets/rocket.png' class='rocketimg'>");
//Inserting it through jquery before the blastoff
  $(newRocket).insertBefore("#blastoff");
//Ensuring no more new rockets can be made until declared.
  createRocket=false;
//This jquery function will animate the new rocket from right side of the...
//...the screen to left replacing the rocket that just took off.
  $(newRocket).animate({
      left: "-=600"
    },

//The 5000 value defines the 5 seconds it will take to travel from the right...
//...to the correct position
    5000, function() {
//Animation complete.
    $(newRocket).addClass('rocket');
//Now the newRocket recieves the original rocket class.
    $(newRocket).removeClass('rocketBegin');
//In addition the class which let the rocket travel to the blastoff position...
//...is removed.
      createRocket=true;
//createRocket becomes true again so the takeoff function may be triggered...
//...again, but only after the newRocket's rocketBegin's class is removed.
//This prevents more then 2 rockets to be screen at a time.
      });

    }
  }

}
