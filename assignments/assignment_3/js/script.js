"use strict";

/*****************

Slamina
solraS leahciM

******************/

let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];


let $correctButton;

let buttons = [];
//Step 4: Creating my score variable
let scoreVal = 0;

const NUM_OPTIONS = 5;
//Step 4: Storing my score in a jquery object
let $score;

$(document).ready(setup);


function setup() {

  $score = $('#score');
  //Step 1: Set up annyang
  if (annyang) {
    console.log("started")
  //Step 1: Create my 'give up' voice command.
  var commands = {
    'I give up': giveUpFunction,
  //Step 2: Creating my voice command for the sayItAgainFunction.
    'Say it again': sayItAgainFunction,
  //Step 3: Creating my voice command with the correct animal name substituted.
    'I think it is *animal': replaceX
  };
  annyang.addCommands(commands);

  annyang.start();
  newRound();
}


}

//Step 1: Creating my giveUpFunction so I can animate the correct answer.
function giveUpFunction() {
    console.log($correctButton);
    $($correctButton).effect('shake').css("background,red");
//Step 4: Resetting the score to 0 if the player gives up.
    scoreVal = 0;
    $score.text(scoreVal);

    setTimeout(newRound, 1000);
}

//Step 2: Creating the function which will repeat the correct answer backwards.
function sayItAgainFunction() {
  console.log(" say again");
  sayBackwards($correctButton.text());

}
//Step 3: The substituted animal voice command will trigger this initial...
//...function.
function replaceX(animal){
  console.log("the animal guessed is "+animal);
//Step 3: It will then trigger the guess function with the substituted animal.
  handleGuessReplace(animal);
}


function newRound() {

  $('.guess').remove();
  buttons = [];

  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = getRandomElement(animals);
    let $button = addButton(answer);
    buttons.push($button);
  }

  $correctButton = getRandomElement(buttons);
  sayBackwards($correctButton.text());
}


function sayBackwards(text) {

  let backwardsText = text.split('').reverse().join('');
  console.log("backwards");

  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };

  responsiveVoice.speak(backwardsText, 'UK English Male', options);
}


function addButton(label) {
  let $button = $('<div></div>');
  $button.addClass("guess");
  $button.text(label);
  $button.button();
  $button.on('click', handleGuess);
  $('body').append($button);
  return $button;
}


function handleGuess() {

  if ($(this).text() === $correctButton.text()) {
    $('.guess').remove();
    setTimeout(newRound, 1000);
  //Step 4: Adding +1 to the score for each correct answer.
    scoreVal ++ ;
    $score.text(scoreVal);
  }
  else {
    $(this).effect('shake');
    sayBackwards($correctButton.text());
  //Step 4: Resetting the score to 0 if the player chooses an incorrect...
  //... answer.
    scoreVal = 0;
    $score.text(scoreVal);
  }
}

//Step 3: This function will check if the animal name from the voice command...
//...matches the correct button.
function handleGuessReplace(animal) {
      console.log("in replace");
  if (animal.toLowerCase()=== $correctButton.text()) {
//Step 4: Adding +1 to the score each time the player says the correct answer...
//...as well.
    scoreVal ++ ;
    $score.text(scoreVal);
    $('.guess').remove();
    setTimeout(newRound, 1000);
  }
  else {
    sayBackwards($correctButton.text());
//Step 4: Resetting the score to 0 if the player says the incorrect answer.
    scoreVal = 0;
    $score.text(scoreVal);
  }
}


function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
