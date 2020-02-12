"use strict";

/*****************

Michael Sarlos (40018365)
Assignment #2

******************/


const REVEAL_POSSIBILITY = 0.1;
const UPDATE_FREQUENCY = 500;

//Step 1: Adding my variables
let secretsFound = 0;
let secretsTotal = 0;

let classifiedsTotal;
let classifiedsFound;

let $spans;
let $secrets;

$(document).ready(setup);

// setup()

function setup() {
  $spans = $('span');
  //Step 2:
  //Selecting the secrets
  $secrets = $('.secret');
  console.log($secrets.length);
  //Using the length property to calculate the result
  secretsTotal = $secrets.length;
  //Storing the result in the classifiedsTotal class
  classifiedsTotal = $('#classifiedsTotal');
  //Setting the span's value using the text function
  classifiedsTotal.text(secretsTotal);

  //Step 3:
  //Adding a mouseover event to all the secrets
  $secrets.on('mouseover', secretMouseover);

  $spans.on('click', spanClicked);
  setInterval(update, UPDATE_FREQUENCY);

}

function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}


function update() {
  $spans.each(updateSpan);
}


function updateSpan() {
  let r = Math.random();
  if (r < REVEAL_POSSIBILITY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

//Step 3-4:
//Creating my event handler function
function secretMouseover(){
  
//Step 5:
//Adding a found class to any secrets which are moused over
 $(this).addClass('found');

//Step 6:
//Removing the mouseover event
$(this).off('mouseover');

//Step 7:
//Creating a function to increase the variable counter so the total secrets...
//...variable changes
 secretsFound = secretsFound + 1;

//Step 8:
//Selecting the span which counts the secrets
classifiedsFound = $('#classifiedsFound');
//Using the text function I am setting the text to the value of the...
//...secrets found
classifiedsFound.text(secretsFound);

}
