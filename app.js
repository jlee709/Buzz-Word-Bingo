//jshint esversion:6
console.log('iamhere');

//initial depencies
let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;


//uses public dir in express invokation
app.use(express.static('public'));









//port listens
app.listen(PORT, (err) => {
  console.log('server ' + PORT);
});