const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const PORT = 5000;

let guesses;
let guessHistory = [];
let returnObject;
// Get Response from client

// This must be added before GET & POST routes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// POST
app.post('/guesses', function(req,res) {
  guesses = req.body;
  
  // an array inside of another array
  for (item of guesses) {
    guessHistory.push(item);
  }

  console.log('post request server guessHistory', guessHistory);
  compareGuesses(guesses, guessHistory);
});

// GET
app.get('/guesses', function(req, res){
  console.log('our get request body',req.body);
}); 

// Random Generator
function randomGenerator() {
  // return Math.floor(Math.random() * 25) + 1;
  return 5;
}

// Compared Guesses
function compareGuesses(guesses, guessHistory) {
  console.log('server guess history', guessHistory);
  let ranNum = randomGenerator();
  let numOfGuesses = guesses.length;
  for (item of guesses) {
    console.log('item guess is', Number(item.guess));
    console.log('random number', ranNum);
    if(Number(item.guess) === ranNum) {
      returnObject = {value: item.name, numguesses: numOfGuesses, history: guessHistory}
    } else {
      returnObject = {value: 'No match try again!', numguesses: numOfGuesses, history: guessHistory}
    }
  }
  return returnObject;
}

// Compared Guesses
app.get('/comparedGuesses', (req, res) => {
  res.send(compareGuesses(guesses));
});


app.listen(PORT, () => {
  //console.log ('Server is running on port', PORT)
  console.log (`Connect to: http://localhost:${PORT}`);
})
