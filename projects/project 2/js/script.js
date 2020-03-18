
//Step 1: I set up my variable for my initial cat
let $moneyCat;
// I set up my variables for my cats different animation responses.
let $happyCat;
let $sadCat;
let $angryCat;

//My variable for my button to pay more money to the cat.
let $paymore

$(document).ready(setup);


function setup() {



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



//Step 2: Defining my functions to trigger the animation images and unique...
//...response.
  function iamHappy() {

  }

  function iamSad() {


  }

  function iamAngry() {


  }


};
