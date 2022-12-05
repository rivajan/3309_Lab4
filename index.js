const { query } = require('express');
const express = require('express');
const mysql = require('mysql');
const app = express();
// var path = require('path');
// const session = require('express-session');
app.use(express.static('views'));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.listen('3000', () => {
  console.log('Server started on port 3000');
});

// Create connection 
const db = mysql.createConnection({
<<<<<<< HEAD
  host: 'localhost',
  user: 'root',
  password: 'smallworld',
  database: 'TESTING'
=======
    host     : 'localhost',
    user     : 'root',
    password : 'smallworld',
    database : 'SmallWorld'
>>>>>>> a2d9ebf4e5486d902924393eb9e6a3c91f4360b0
})

//Connect Check
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...')
});

<<<<<<< HEAD
app.get('/', (req, res) => {
  var query = "SELECT SUM(totalCost) AS 'Total Cost' FROM (SELECT RecipeIngJoin.ingredientID, RecipeIngJoin.recipeID, Ingredient.ingredientCost, Ingredient.ingredientAmount,((Ingredient.ingredientCost)*(Ingredient.ingredientAmount)) AS totalCost FROM RecipeIngJoin INNER JOIN Ingredient ON RecipeIngJoin.ingredientID = Ingredient.ingredientID WHERE recipeID = 1478503092) AS T"
  db.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})

// parse requests of content-type - application/json
app.use(express.json());
=======
// app.use(
//     express.urlencoded({
//       extended: true
//     })
// );

// app.use(session({
//     secret: "random-value-123",
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(express.json());

// //index / homepage 
// app.get('/', (req, res) => {
//     //this is our index page....
//     res.render('index');
// });

// /*
// *********************
//     Recipe Query
// *********************
// */

// //register for new members- redirected from index
// app.get('/recipe', (req, res)=>{
//     //console.log(req.body); returns nothing bc its a get
//     res.render('recipe');
// });

// //handle when they enter the recipe ID and name .
// app.post('/recipe', (req, res)=>{
//     // fetch all the data in variable
//     conn().connect();
>>>>>>> a2d9ebf4e5486d902924393eb9e6a3c91f4360b0
