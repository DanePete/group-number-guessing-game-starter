const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

//Random Number




// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/randomNumber', function(req, res){
  console.log('send back number');
  console.log('request is', req);
  //send back to client
  res.send(randomNumber);
}); 


app.listen(PORT, () => {
  //console.log ('Server is running on port', PORT)
  console.log (`Connect to: http://localhost:${PORT}`);
})
