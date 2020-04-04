/*

Condiments
Michael Sarlos

*/

$(document).ready(function() {

  // The first thing we need to do is load the data we're going
  // to use to get random words.
  //
  // For that we use jQuery's .getJSON() function, which we give
  // the location of the file, and a function to call when the data
  // is available...
  $.getJSON('data/data.json')
    .done(gotData)
    .fail(dataError);
});

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData(data) {
  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then we add those
  // words onto our page by setting the text of the appropriate span.

  //Step 3: I am defining the indefinite articles so "a" can be changed...
  //...to "an" when the proceeding words start with a vowel.
  let article = "a";
  let articleTwo = "a";

  // First the condiment
  // Get a random condiment from the condiments array in the JSON
  let condiment = getRandomElement(data.condiments);
  // Assume it's singular
  let verb = 'is';
  // Check if the last latter of the condiment is an 's'
  if (condiment.charAt(condiment.length - 1) === 's') {
    // If so, assume it's plural (this is a flawed assumption)
    verb = 'are';
  }

  // Now the cat
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

  // Same again for room
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

  // Now we can construct our description with a template string
  // We have the basic structure of a sentence and we substitute in the
  // values we've just calculated

  //
  //Step 2: I am reorganizing the sentence to include my two new descriptive...
  //...elements.
  //Step 3: I am substituting the "a" with the article variables so they can...
  //...change accordingly.
  let description = `${condiment} ${verb} like a ${cat} dipped in ${color.color} ${beer} in a ${room}.`;

  // Finally, we add it to the page and hey presto!
  $('body').append(description)
}

// dataError()
//
// Called if the JSON does not load for some reason.
// Reports the error to the console.
function dataError(request, text, error) {
  console.error(error);
}

// getRandomElement ()
//
// Returns a random element from the array provided
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
