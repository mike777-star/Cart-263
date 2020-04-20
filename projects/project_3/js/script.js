


$(document).ready(setup);


function setup() {

  $("#start").on('click', showInstructions);


  let options = {
    pitch: 1.8,
    rate: 0.8,

  };



    annyang.addCommands(commands);

    annyang.start();
    annyang.debug();

  }
