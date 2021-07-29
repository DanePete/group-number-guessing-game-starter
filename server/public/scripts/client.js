$(document).ready(onReady);

function onReady() {
  console.log("jquery is loaded!");
  $(document).on(`click`,`#submitBtn`, submitGuess);
  // $(document).on(`click`,`#submit`, roundCounter);
}

//Grab input from .html input fields
function submitGuess() { 
  let guesses = []; // Prepare an Array to collect user input
  // Cycle through all submitted input and append it to an object
  $( "input" ).each(function( index ) { //Do not use arrow function, it breaks "this"
    console.log($( this ).val()); // Log current input
    // Push created object to array. 
    // guesses.push({guess: $( this ).val(), name: $( this ).data('name')});
    let jsonPost = {guess: $( this ).val(), name: $( this ).data('name')}
    guesses.push(jsonPost);
  });

  // POST
  $.ajax({ 
    method: 'POST',
    url:'/guesses',
    data: JSON.stringify(guesses),
    // data: {JSON.stringify(guesses)},
    contentType: 'application/json'
  }).then(function(response) {
    console.log('we are not getting here');
    console.log('POST / guesses', response);
  }).catch((error) => {
    console.log('failed', error);
    $('body').prepend('<h2>ERROR</h2>');
  });

  // GET
  $.ajax({
    type: 'GET',
    url: '/comparedGuesses'
  }).then(function (response) {
    console.log(response);
    $('#counter').append(`
      <p>Number of guesses ${response.numguesses}</p>
      <h3>WINNER: ${response.value}</h3>
    `)
    // for (let i = 0; i < response.length; i++) {
    //     let song = response[i];
    //     $('#songTableBody').append(`
    //         <tr>
    //             <td>${song.title}</td>
    //             <td>${song.artist}</td>
    //         </tr>
    //     `);
    // }
  });
 
  console.log('our guesses are', guesses); // Check our finished array.
}//end submitGuess
