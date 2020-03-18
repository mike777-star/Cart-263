
//Step 1: I set up my variable for my initial cat
let $moneyCat;
// I set up my variables for my cats different animated responses.
let $happyCat;
let $sadCat;
let $angryCat;

//My variable for my button to pay more money to the cat.
let $paymore

$(document).ready(setup);


function setup() {
//Step 6: Before the game starts there will be a start screen which will be...
//...removed on click.
  $("#start").on('click', showInstructions);

//Step 3: I am defining the pitch and rate of my responsive voice as random...
//...in the mean time.
  let options = {
    pitch: Math.random(),
    rate: Math.random(),
    onend: resetCat
  };

  let catState = 0;
  if (annyang) {
    console.log("started")

//Step 2: Setting up my annyang commands and functions for all three responses.
    var commands = {

      'I am happy': iamHappy,

      'I am sad': iamSad,

      'I am angry': iamAngry,

    };

    annyang.addCommands(commands);

    annyang.start();
    annyang.debug();

  }

//Step 6: By clicking and removing the start screen the cat will load with...
//...a set of instructions over it.
  function showInstructions() {
    $("#start").remove();
//This jquery function will remove the display none on both the cat and...
//...button classes.
    $(".cat").show();
    $(".button").show();
//After you click the instructions the play function will trigger which will...
//...remove the message as the more money button will appear.
    $("#instructions").on('click', play);
  }

  function play() {
    $("#instructions").remove();
    $("#moremoney").show();
  }



//Step 2: Defining my "iam" functions to trigger the correct frames and...
//...unique response.

  function iamHappy() {

//Step 4: I am defining the catState values for each response so the...
//...correct closed mouth frame will play after the open mouth frame.
    catState = 1;

//Using jquery to load the first open mouth frame once.
    $("#normalCat").attr("src", "assets/happy_cat.png");

//Once the frame is loaded then the responsive voice with trigger.
    responsiveVoice.speak("I am happy too", 'UK English Male', options);
  }

  function iamSad() {
//Step 4 (Repeated for Sad animation):
    catState = 2;

    $("#normalCat").attr("src", "assets/sad_cat.png");



    responsiveVoice.speak("I am sadder then you", 'UK English Male', options);

  }

  function iamAngry() {
  //Step 4 (Repeated for Angry animation):
    catState = 3;
    $("#normalCat").attr("src", "assets/angry_cat.png");


    responsiveVoice.speak("I am more angry then you", 'UK English Male', options);

  }

  //Step 5: I am creating my reset function to actually trigger the closed...
  //...mouth frames using the catState values.
  function resetCat() {

    if (catState === 1) {
      $("#normalCat").attr("src", "assets/glad_cat.png");

    }
    else if (catState === 2) {
      $("#normalCat").attr("src", "assets/unhappy_cat.png");

    }
    else if (catState === 3) {
      $("#normalCat").attr("src", "assets/pissed_cat.png");

    }
  }

};
