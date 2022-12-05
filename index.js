const { query } = require('express');
const express = require('express');
const mysql = require('mysql');
const app = express();

app.listen('3000', () => {
  console.log('Server started on port 3000');
});

// Create connection 
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'smallworld',
  database: 'TESTING'
})

// Connect Check
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...')
});

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