


$(document).ready(setup);



function setup() {




//hide all questions except first one.
$("#robot").hide();
$("#questionOne").hide();
$("#questionTwo").hide();
$("#questionThree").hide();
$("#questionFour").hide();
$("#questionFive").hide();
let nextQuestion =1;

 $.getJSON('data/data.json')
   .done(gotData)
   .fail(dataError);

   function dataError(){
     console.log("could not get data");
   }
};

function gotData(data){
  let answers = [];
  console.log(data);

//when we click on start
  $("#start").click(function(){
    $("#robot").show();
    $("#questionOne").show();
    $("#start").hide();
    responsiveVoice.speak("How many facebook friends do you have?",
    "UK English Male", {onend: EndCallback});
  });

$("#robot").click(function(){
  //voice options
  let textOptions = ["Please answer the questions.", "Why waste your time clicking on me.",
  "Your time on earth is finite.","1zero1one1zero1zero1onezerozero","Refrain from on.click function."];
  // random index
  let randomIndex = Math.floor(Math.random()*textOptions.length);
//  console.log(randomIndex);
    $("#robotImage").attr("src","assets/mad_logo.png");
  responsiveVoice.speak(textOptions[randomIndex], "UK English Male", {onend: EndCallback});
})
function EndCallback(){
  console.log("end");
  $("#robotImage").attr("src","assets/happy_logo.png");
}
  //$("#start").on('click', showInstructions);
/* answer first question */
  $("#submit-1").click(function(){
  let inputValue  = $("#facebookFriend").val();
  if (inputValue==="") {
    // error
    console.log("not a num");

  }
//is valid
  else{
    answers.push(inputValue);
    nextQuestion=2;
    $("#questionOne").hide();
    $("#questionTwo").show();
    responsiveVoice.speak("How many real friends do you have?",
    "UK English Male", {onend: EndCallback});
  }

}); //end first question


/* answer second question */
$("#submit-2").click(function(){
let inputValue  = $("#realFriend").val();
if (inputValue==="") {
  // error
  console.log("not a num");
}
//is valid
else{
  answers.push(inputValue);
    nextQuestion=3;
  $("#questionTwo").hide();
  $("#questionThree").show();
  responsiveVoice.speak("Can a robot be your friend?",
  "UK English Male", {onend: EndCallback});

  }
}); //end second question

/* answer third question */
$("#submit-3").click(function(){
			let ele = document.getElementsByName('three');

			for(i = 0; i < ele.length; i++) {
				if(ele[i].checked) {
        console.log(ele[i].value);
        answers.push(ele[i].value);
        nextQuestion=4;
        $("#questionThree").hide();
        $("#questionFour").show();
        responsiveVoice.speak("Would you believe me if I told you robots are already your friends?",
        "UK English Male", {onend: EndCallback});
        break;
      }
		 }
   }); //end third question

$("#submit-4").click(function(){
  let ele = document.getElementsByName('four');
  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked) {
    console.log(ele[i].value);
    answers.push(ele[i].value);
    nextQuestion=4;
  $("#questionFour").hide();
  $("#questionFive").show();
  responsiveVoice.speak("What if I told you we are more then friends? What if I told you we are one?",
  "UK English Male", {onend: EndCallback});
  nextQuestion=5;


     }
    }
  });

$("#submit-5").click(function(){
  let ele = document.getElementsByName('five');
  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked) {
    console.log(ele[i].value);
    answers.push(ele[i].value);
    $("#questionFive").hide();
    nextQuestion=6;

    }
  }

  let appArray = data.appliances;
  let randomIndexOne = Math.floor(Math.random()* appArray.length);
  let appSelection = appArray[randomIndexOne];
  let newanswerTwo = answers[1]+" real friends, I'd say you have the sociabibility of a "+appSelection;

  let techArray = data.technologies;
  let randomIndexTwo = Math.floor(Math.random()* techArray.length);
  let techSelection = techArray[randomIndexTwo];
  let newanswerFour = answers[3]+techSelection;



  let textanswer = ` Judging by your ${answers[0]} facebook friends and your ${newanswerTwo}. ${answers[2]}. ${newanswerFour}. ${answers[4]}.`;
  $("#answer").text(textanswer);

  responsiveVoice.speak(textanswer, "UK English Male", {onend: EndCallback});


});



//Step 3: I am defining the pitch and rate of my responsive voice as random...
//...in the mean time.
  let options = {
    pitch: 1.8,
    rate: 0.8
    //onend: resetRobot
  };

  if (annyang) {
    console.log("started")

//Step 2: Setting up my annyang commands and functions for all three responses.
    var commands = {
      'I have :numFriends facebook friends': questionOneCommand,

      'I have :numFriends real friends': questionTwoCommand,
    };

    annyang.addCommands(commands);

    annyang.start();
  //  annyang.debug();

  }

  function questionOneCommand(numFriends){
  //  console.log(numFriends);
    answers.push(numFriends);
    nextQuestion=2;
    $("#questionOne").hide();
    $("#questionTwo").show();
    responsiveVoice.speak("How many real friends do you have?",
    "UK English Male", {onend: EndCallback});
  }

  function questionTwoCommand(numFriends){
  //  console.log(numFriends);
    answers.push(numFriends);
    nextQuestion=2;
    $("#questionTwo").hide();
    $("#questionThree").show();
    responsiveVoice.speak("Can a robot be your friend?",
    "UK English Male", {onend: EndCallback});

  }


// //Step 6: By clicking and removing the start screen the cat will load with...
// //...a set of instructions over it.
//   function showInstructions() {
//     $("#start").remove();
// //This jquery function will remove the display none on both the cat and...
// //...button classes.
//     $(".robot").show();
//     $(".button").show();
// //After you click the instructions the play function will trigger which will...
// //...remove the message as the more money button will appear.
//     $("#instructions").on('click', play);
//   }
//
//   function play() {
//     $("#instructions").remove();
//
//
//   }

};
