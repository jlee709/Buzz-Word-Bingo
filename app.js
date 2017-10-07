//jshint esversion:6
console.log('iamhere');

//initial depencies
let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

//uses public dir in express invokation
app.use(express.static('public'));

//routes

app.get('/', (req, res)=> {
  res.send('Hello');
});

app.get('/buzzwords', (req, res) => {
  res.send('this is the buzzwords');
});

app.post('/buzzwords', (req, res) =>{
  console.log('will do post on buzzwords');
});

app.put('/buzzwords', (req, res) => {
  console.log('does put reuest');
});

app.delete('/buzzwords', (req, res) => {
  console.log('adds delete method');
});

app.post('/reset', (req, res) => {
  console.log('sets reset to true');
});

  




//port listens
app.listen(PORT, (err) => {
  console.log('server ' + PORT);
});