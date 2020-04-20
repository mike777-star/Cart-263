


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
//I am taking the answer and pushing it to my answers array
    answers.push(inputValue);
//I am changing the question value to the next one so the question inputs...
//...don't get confused.
    nextQuestion=2;
//I am hiding the current question(1) and showing question two.
    $("#questionOne").hide();
    $("#questionTwo").show();

  }

});


  let options = {
    pitch: 1.8,
    rate: 0.8,

  };



    annyang.addCommands(commands);

    annyang.start();
    annyang.debug();

  };
