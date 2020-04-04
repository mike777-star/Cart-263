/*

Condiments
Michael Sarlos

*/

$(document).ready(function() {

  $.getJSON('data/data.json')
    .done(gotData)
    .fail(dataError);
});

//Step 5: I am creating an on click function which with refresh the sentence...
//...with a new one.
$(document).on('click', function(){

  $.getJSON('data/data.json')
    .done(gotData)
    .fail(dataError);
})


function gotData(data) {

  $('body').append(description)


  //Step 3: I am defining the indefinite articles so "a" can be changed...
  //...to "an" when the proceeding words start with a vowel.
  let article = "a";
  let articleTwo = "a";


  let condiment = getRandomElement(data.condiments);

  let verb = 'is';

  if (condiment.charAt(condiment.length - 1) === 's') {

    verb = 'are';
  }


  let cat = getRandomElement(data.cats);
  //Step 4: Even though the cat name will display in upper case I...
  //...created a second variable so the conditional can read the lower case.
  let catL = cat.toLowerCase();
  //Step 4: This is the conditional which reads the cat name's first...
  ///...character. If it is one of the five vowels, article which was...
  //...previously defined as "a" will become "an".
  if (catL.charAt(0) === 'a' || catL.charAt(0) === 'e' || catL.charAt(0) === 'i' ||catL.charAt(0) === 'o' ||catL.charAt(0) === 'u' ){
    article = "an";

  }
  else {
    article = "a";
  }


  let room = getRandomElement(data.rooms);
  //Step 4: I repeat the same process, but for the second "a" which preceeds...
  //...the room array.
  if (room.charAt(0) === 'a' || room.charAt(0) === 'e' || room.charAt(0) === 'i' ||room.charAt(0) === 'o' ||room.charAt(0) === 'u' ){
    articleTwo = "an";

  }
  //Step 4: My second article variable.
  else {
    articleTwo = "a";
  }
  //Step 1: I am getting a random beer from the beer array within the JSON file.
  let beer = getRandomElement(data.beers);
  //Step 1: I am doing the same for color array so the beer can have a color.
  let color = getRandomElement(data.colors);

  //Step 2: I am reorganizing the sentence to include my two new descriptive...
  //...elements.
  //Step 3: I am substituting the "a" with the article variables so they can...
  //...change accordingly.
  let description = `${condiment} ${verb} like a ${cat} dipped in ${color.color} ${beer} in a ${room}.`;


  $('body').append(description)
}


function dataError(request, text, error) {
  console.error(error);
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
