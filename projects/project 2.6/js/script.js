let $moneyCat;
let $happyCat;
let $sadCat;
let $angryCat;

let $paymore

$(document).ready(setup);


//
// $paymore = $('.button');
//
// $paymore.on('click', iamHappy);


function setup() {
  $("#start").on('click', showInstructions);

  let options = {
    pitch: Math.random(),
    rate: Math.random(),
    onend: resetCat
  };

  let catState = 0;
  if (annyang) {
    console.log("started")

    var commands = {

      'I am happy': iamHappy,

      'I am sad': iamSad,

      'I am angry': iamAngry,

    };

    annyang.addCommands(commands);

    annyang.start();
    annyang.debug();

  }

  function showInstructions() {
    $("#start").remove();

    $(".cat").show();
    $(".button").show();

    $("#instructions").on('click', play);

    // Same as:
    // $(".cat").css({
    //   position: "block"
    // });
    // $(".button").css({
    //   position: "block"
    // });

    // $(".wrapper").addClass("message");
    // loadimage()
  }

  function play() {
    $("#instructions").remove();
    $("#moremoney").show();
  }



  function iamHappy() {
    console.log("happy");

    catState = 1;

    $("#normalCat").attr("src", "assets/happy_cat.png");


    responsiveVoice.speak("I am happy too", 'UK English Male', options);
  }

  function iamSad() {
    catState = 2;

    $("#normalCat").attr("src", "assets/sad_cat.png");



    responsiveVoice.speak("I am sadder then you", 'UK English Male', options);

  }

  function iamAngry() {
    catState = 3;
    $("#normalCat").attr("src", "assets/angry_cat.png");


    responsiveVoice.speak("I am more angry then you", 'UK English Male', options);

  }

  function resetCat() {

    console.log("reset cat");
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
}
