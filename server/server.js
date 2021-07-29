const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
let currentGuesses = [];
// Get Response from client

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


app.post('/guesses', function(req,res) {
  
  let currentGuesses = req.body;
  // currentGuesses.push(guesses);
});

app.get('/guesses', function(req, res){
  console.log('our get request body',req.body);
}); 

function randomGenerator() {
  return Math.floor(Math.random() * 25) + 1;
}


function compareGuesses() {
  let num = randomGenerator();
  
}

// GET & POST Routes go here
// app.get('/randomNumber', function(req, res){
//   const rndInt = Math.floor(Math.random() * 25) + 1
//   console.log('send back number');
//   console.log('request is', req);
//   //send back to client
//   res.send({num: rndInt});
// }); 

app.listen(PORT, () => {
  //console.log ('Server is running on port', PORT)
  console.log (`Connect to: http://localhost:${PORT}`);
})
