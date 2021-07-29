const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
let guesses;
// Get Response from client

// This must be added before GET & POST routes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// POST
app.post('/guesses', function(req,res) {
  guesses = req.body;
  console.log(guesses);
  compareGuesses(guesses);
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
app.get('/comparedGuesses', (req, res) => {
  res.send(compareGuesses(guesses));
});

// Compared Guesses
function compareGuesses(guesses) {
  let ranNum = randomGenerator();
  let numOfGuesses = guesses.length;
  for (guess of guesses) {
    if(Number(guess.guess) === ranNum) {
        let returnObject = {value: guess.name, numguesses: numOfGuesses}
        return returnObject;
    } else {
      let returnObject = {value: 'failed guess, try again!', numguesses: numOfGuesses}
      return returnObject;
    }
  }
}

app.listen(PORT, () => {
  //console.log ('Server is running on port', PORT)
  console.log (`Connect to: http://localhost:${PORT}`);
})
