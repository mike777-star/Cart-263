"use strict";


$(document).ready(setup);

function setup() {
  setInterveral(update,500);
  $('span').on('click', spanClicked);
}

function spanClicked () {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

function update() {
  console.log("update!");
  $('span').each(updateSpan);
}

function updateSpan() {
  console.log("update span!");
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
