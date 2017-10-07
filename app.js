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

  




//port listens
app.listen(PORT, (err) => {
  console.log('server ' + PORT);
});