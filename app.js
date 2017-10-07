//jshint esversion:6
console.log('iamhere');

//initial depencies
let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

//the-buzz-words array variable
var buzzArry =[];
var score = 0;
//uses public dir in express invokation
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

//routes

app.get('/', (req, res)=> {
  res.send('Hello');
});

app.get('/the-buzz-words', (req, res) => {
  res.json({"buzzwords": buzzArry});
});

app.post('/the-buzz-word', (req, res) =>{
  console.log('will do post on the-buzz-words');
  for(let i = 0; i < buzzArry.length; i++){
    if(buzzArry[i].buzzword === req.body.buzzword){
      console.log('cant share the same buzzword');
      return - 1;
    }
  }
  buzzArry.push(req.body);
  console.log(req.body);
  res.json({ "success": true });
});

app.put('/the-buzz-word', (req, res) => {
  console.log('does put reqest');
  for(let i = 0; i < buzzArry.length; i++){

    if(buzzArry[i].buzzword === req.body.buzzword){
      console.log('cant share the same buzzword');
      buzzArry.push(req.body);
      score = score + 1;
      return res.json({ "success": true, newScore: score });

    } 
  }   

  console.log('adding PUT');
  return res.json({ "success": false, newScore: score  });
});

app.delete('/the-buzz-word', (req, res) => {
  console.log('adds delete method');
});

app.post('/reset', (req, res) => {
  console.log('sets reset to true');
});

  






//port listens
app.listen(PORT, (err) => {
  console.log('server ' + PORT);
});