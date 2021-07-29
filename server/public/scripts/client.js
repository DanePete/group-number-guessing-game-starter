$(document).ready(onReady);

function onReady() {
  console.log("jquery is loaded!");
  $(document).on(`click`,`#submit`, submitGuess);
  $(document).on(`click`,`#submit`, roundCounter);


}

//Grab input from .html input fields
function submitGuess(){

}//end submitGuess

// Determine submission count 
let count = 0;
function roundCounter(){
  count++;
   
}//end roundCounter