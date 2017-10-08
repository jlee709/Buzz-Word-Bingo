//jshint esversion:6

console.log('iamhere');

//initial depencies
let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

//the-buzz-words array variable
const players = {player: 'string', score: 0};
var buzzArry =[];
var score = 0;
//uses public dir in express invokation
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

//routes chained 
app.get('/', (req, res)=> {
  res.send('Hello');
})
 .get('/the-buzz-words', (req, res) => {
  res.json({"buzzwords": buzzArry});
})
.post('/the-buzz-word', (req, res) =>{
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
})
.put('/the-buzz-word', (req, res) => {
  console.log('PUT request executing');
  for(let i = 0; i < buzzArry.length; i++){

    if(buzzArry[i].buzzword === req.body.buzzword){
      console.log('cant share the same buzzword');
      buzzArry.push(req.body);
      score = score + 1;
      return res.json({ "success": true, newScore: score });
    } 
  }   

  return res.json({ "success": true, newScore: score  });
})
.delete('/the-buzz-word', (req, res) => {
  
  console.log('DELETE method executing');
  return res.json({ "success": true });
})
.post('/reset', (req, res) => {
  console.log('RESET invoaked, clearing data');

  res.json({ "reset": true });
  return res.end();
});

//port listens
app.listen(PORT, (err) => {
  console.log('server ' + PORT);
});