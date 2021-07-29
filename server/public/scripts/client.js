$(document).ready(onReady);

function onReady() {
  console.log("jquery is loaded!");
  $(document).on(`click`,`#submitBtn`, submitGuess);
  $(document).on(`click`,`#submit`, roundCounter);


}

//Grab input from .html input fields
function submitGuess() { 
  let guesses = []; // Prepare an Array to collect user input
  // Cycle through all submitted input and append it to an object
  $( "input" ).each(function( index ) { //Do not use arrow function, it breaks "this"
    console.log($( this ).val()); // Log current input
    // Push created object to array. 
    guesses.push({guess: $( this ).val(), name: $( this ).data('name')});
  });
  console.log('our guesses are', guesses); // Check our finished array.
}//end submitGuess

// Determine submission count 
let count = 0;
function roundCounter(){
  count++;
   console.log($('#counter'));
   $('#counter').append (
    `
      <p>Count is: ${count}</p>
    `
   );
}//end roundCounter