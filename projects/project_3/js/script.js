


$(document).ready(setup);


function setup() {

//Step 1: I am hiding all my questions so the start image can display first.
  $("#robot").hide();
  $("#questionOne").hide();
  $("#questionTwo").hide();
  $("#questionThree").hide();
  $("#questionFour").hide();
  $("#questionFive").hide
  let nextQuestion =1;

};

//Retrieving my json data for my arrays.
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

//Step 2: Here I am jquery functions so when the user click the start screen...
//...it remove and it load the A.I. image alongside the first question.
    $("#start").click(function(){
    $("#robot").show();
    $("#questionOne").show();
    $("#start").hide();
//Step 12: I'm adding voice responses for each question.
    responsiveVoice.speak("How many facebook friends do you have?",
    "UK English Male", {onend: EndCallback});

    });

//Step 9: When you click the A.I. logo it will trigger a responsive voice.
    $("#robot").click(function(){
//The voice options
    let textOptions = ["Please answer the questions.", "Why waste your time clicking on me.",
    "Your time on earth is finite.","1zero1one1zero1zero1onezerozero","Refrain from on.click function."];
//The function which randomized which voice option is played.
    let randomIndex = Math.floor(Math.random()*textOptions.length);
//A little alternate animation state which changes only when the A.I. is...
//...speaking.
      $("#robotImage").attr("src","assets/mad_logo.png");
    responsiveVoice.speak(textOptions[randomIndex], "UK English Male", {onend: EndCallback});
  })
//The function which returns the A.I. to its normal state once the voice line...
//...is complete.
  function EndCallback(){
    console.log("end");
    $("#robotImage").attr("src","assets/happy_logo.png");
  }

//Step 3: I am setting up my first question so the user can only input number...
//...values into the form.
    $("#submit-1").click(function(){
  let inputValue  = $("#facebookFriend").val();
  if (inputValue==="") {
  }

  else{
//I am taking the answer and pushing it to my answers array which later...
//...construct a unique response from all the question inputs.
    answers.push(inputValue);
//I am changing the question value to the next one so the question inputs...
//...don't get confused.
    nextQuestion=2;
//I am hiding the current question(1) and showing question two.
    $("#questionOne").hide();
    $("#questionTwo").show();

    responsiveVoice.speak("How many real friends do you have?",
    "UK English Male", {onend: EndCallback});
  }
});

//Step 4: I repeated the same sequence for question 1 for question 2 as it...
//... also used a number form.
$("#submit-2").click(function(){
let inputValue  = $("#realFriend").val();
if (inputValue==="") {
}

else{
  answers.push(inputValue);
    nextQuestion=3;
  $("#questionTwo").hide();
  $("#questionThree").show();

  responsiveVoice.speak("Can a robot be your friend?",
  "UK English Male", {onend: EndCallback});
  }
});

//Step 6: I am setting up the array for my radio check box forms. Depending...
//...which answer they choose a respective value will be sent to the answers...
//...array.
$("#submit-3").click(function(){
			let ele = document.getElementsByName('three');

//The function which takes the form input and then pushes it to the answers...
//array.
			for(i = 0; i < ele.length; i++) {
				if(ele[i].checked) {
        console.log(ele[i].value);
        answers.push(ele[i].value);
//The events so the question will once again change after the input is...
//...submitted.
        nextQuestion=4;
        $("#questionThree").hide();
        $("#questionFour").show();

        responsiveVoice.speak("Would you believe me if I told you robots are already your friends?",
        "UK English Male", {onend: EndCallback});
        break;
      }
		 }
   });

//Step 7: I am adding question 4 the same way as questio 3 as they both user...
//...the radio buttons as input fields.
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

//Step 8: Same as Step 7
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

//Step 10: In order to ensure a more randomized final answer and I am including...
//...datasets from corpora which will combine with question 3 and 5 output values.
//Question 3 output will combine an electronic appliance.
let appArray = data.appliances;
//The function which randomnly selects from the electronic appliance array.
let randomIndexOne = Math.floor(Math.random()* appArray.length);
let appSelection = appArray[randomIndexOne];
//The function which combines the array result with the third answer and...
//...additional context so it fits in the sentence.
let newanswerTwo = answers[1]+" real friends, I'd say you have the sociabibility of a "+appSelection;

//For the question 5 array integration, I used the same structure as question 3.
//Except I am using a technologies dataset.
let techArray = data.technologies;
let randomIndexTwo = Math.floor(Math.random()* techArray.length);
let techSelection = techArray[randomIndexTwo];
let newanswerFour = answers[3]+techSelection;

//Step 11: This functions takes all the answers from the array or their...
//...modified versions and constructs it into a sentence.
let textanswer = ` Judging by your ${answers[0]} facebook friends and your ${newanswerTwo}. ${answers[2]}. ${newanswerFour}. ${answers[4]}.`;
$("#answer").text(textanswer);

//Step 12: Adding a voice response for the final answer.
responsiveVoice.speak(textanswer, "UK English Male", {onend: EndCallback});

     });


  let options = {
    pitch: 1.8,
    rate: 0.8,

  };


  if (annyang) {
      console.log("started")

  //Step 5: Setting up my annyang commands and functions for questions 1 and 2.
      var commands = {
        'I have :numFriends facebook friends': questionOneCommand,

        'I have :numFriends real friends': questionTwoCommand,
      };

      annyang.addCommands(commands);

      annyang.start();
    //  annyang.debug();

    }
  //These functions will ensure that if the value is spoken it will still be...
  //...pushed and the question events will still occur.
    function questionOneCommand(numFriends){
      answers.push(numFriends);
      nextQuestion=2;
      $("#questionOne").hide();
      $("#questionTwo").show();

      responsiveVoice.speak("How many real friends do you have?",
      "UK English Male", {onend: EndCallback});
    }

    function questionTwoCommand(numFriends){
      answers.push(numFriends);
      nextQuestion=2;
      $("#questionTwo").hide();
      $("#questionThree").show();

      responsiveVoice.speak("Can a robot be your friend?",
      "UK English Male", {onend: EndCallback});
    }

  };
