


$(document).ready(setup);


function setup() {

//Step 1: I am hiding all my questions so the start image can display first.
  $("#robot").hide();
  $("#questionOne").hide();
  $("#questionTwo").hide();
  $("#questionThree").hide();
  $("#questionFour").hide();
  $("#questionFive").hide

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

    });

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
        break;
      }
		 }
   }); //end third question

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
    }

    function questionTwoCommand(numFriends){
      answers.push(numFriends);
      nextQuestion=2;
      $("#questionTwo").hide();
      $("#questionThree").show();
    }

  };
