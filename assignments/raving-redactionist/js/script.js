"use strict";

/*****************

Raving Redactionist
Pippin Barr

You are redacting a document, but it keeps becoming unredacted!
Click the secret information to hide it, don't let all the
secrets become revealed!

******************/

// The chance a span will be revealed per update
const REVEAL_POSSIBILITY = 0.1;
// How often to update the spans (potentially revealing them)
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all spans

//Step 1: Adding my variables
let secretsFound = 0;
let secretsTotal = 0;

let classifiedsTotal;
let classifiedsFound;

let $spans;
let $secrets;

// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the click handler and starts the time loop
function setup() {
  // Save the selection of all spans (since we do stuff to them multiple times)
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

  // Set a click handler on the spans (so we know when they're clicked)
  $spans.on('click', spanClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  setInterval(update, UPDATE_FREQUENCY);


}

// spanClicked()
//
// When a span is clicked we remove its revealed class and add the redacted class
// thus blacking it out
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update() {
  $spans.each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
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

}


// A version using anonymous functions if you're interested:

// $(document).ready(function () {
//   $spans = $('span');
//
//   $spans.on('click',function () {
//     $(this).removeClass('revealed');
//     $(this).addClass('redacted');
//   });
//
//   setInterval(function () {
//     $spans.each(function () {
//       let r = Math.random();
//       if (r < REVEAL_POSSIBILITY) {
//         $(this).removeClass('redacted');
//         $(this).addClass('revealed');
//       }
//     });
//   },UPDATE_FREQUENCY);
// });
