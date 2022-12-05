const express = require('express');
const mysql = require('mysql');
const app = express();

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

// Create connection 
const db = mysql.createConnection({
<<<<<<< Updated upstream
  host: 'localhost',
  user: 'root',
  password: '559_Carlton',
  database: 'TESTING'
=======
    host     : 'localhost',
    user     : 'root',
    password : 'smallworld',
    database : 'SmallWorld'
>>>>>>> Stashed changes
})

// Connect Check
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL Connected...')
});

<<<<<<< Updated upstream
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

/*
*********************
    Recipe Query
*********************
*/

//register for new members- redirected from index
 app.get('/recipe', (req, res)=>{
     //console.log(req.body); returns nothing bc its a get
     res.render('recipe');
     
 });

//handle when they enter the recipe ID and name .
 app.post('/recipe', (req, res)=>{
     // fetch all the data in variable
     conn().connect();
 });
>>>>>>> Stashed changes
