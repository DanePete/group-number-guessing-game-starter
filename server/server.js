const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
let currentGuesses = [];
let comparedGuesses = [];
let guesses;
// Get Response from client

// This must be added before GET & POST routes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


app.post('/guesses', function(req,res) {
  guesses = req.body;
  console.log(guesses);
  compareGuesses(guesses);
});

app.get('/guesses', function(req, res){
  console.log('our get request body',req.body);
}); 

function randomGenerator() {
  return Math.floor(Math.random() * 25) + 1;
}

app.get('/comparedGuesses', (req, res) => {
  res.send(compareGuesses(guesses));
});

function compareGuesses(guesses) {
  let ranNum = randomGenerator();
  let numOfGuesses = guesses.length;
  for (guess of guesses) {
    if(Number(guess.guess) === ranNum) {
        let returnObject = {correct: guess.name, numguesses: numOfGuesses}
        return returnObject;
    } else {
      let returnObject = {correct: 'failed guess, try again!', numguesses: numOfGuesses}
      return returnObject;
    }
  }
}

app.listen(PORT, () => {
  //console.log ('Server is running on port', PORT)
  console.log (`Connect to: http://localhost:${PORT}`);
})
