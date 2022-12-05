const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

// Create connection 
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '559_Carlton',
  database: 'TESTING'
})

// Connect Check
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...')
});

// Function 1
// Get total cost of recipe
app.get('/:recipeID', (req, res) => {
  var query = `SELECT SUM(totalCost) AS 'Total Cost' 
  FROM (SELECT RecipeIngJoin.ingredientID, RecipeIngJoin.recipeID, Ingredient.ingredientCost, Ingredient.ingredientAmount,((Ingredient.ingredientCost)*(Ingredient.ingredientAmount)) AS totalCost 
  FROM RecipeIngJoin INNER JOIN Ingredient ON RecipeIngJoin.ingredientID = Ingredient.ingredientID 
  WHERE recipeID = ${req.params.recipeID}) AS T`
  db.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})

// Function 2
// Start the procurement process for ingredients 
app.get('/api/get-stock/:recipeID', (req, res) => {
  var query = `SELECT IngredientInventory.ingredientStock, TTT.ingredientName, TTT.ingredientAmount, IngredientInventory.city
  FROM (SELECT TT.ingredientID, Ingredient.ingredientName, Ingredient.ingredientAmount
  FROM(SELECT ingredientID FROM RecipeIngJoin
  WHERE recipeID = ${req.params.recipeID}) AS TT
  INNER JOIN Ingredient ON TT.ingredientID = Ingredient.ingredientID) AS TTT
  INNER JOIN IngredientInventory ON TTT.ingredientName =  IngredientInventory.ingredientNamed;
  `
  db.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})
// Update stock of certain ingredient name
app.post('/api/update-stock/:ingredientName/:stockIncrease', (req, res) => {
  var query = `UPDATE IngredientInventory 
  SET ingredientStock = ingredientStock + ${req.params.stockIncrease} WHERE ingredientNamed = '${req.params.ingredientName}'`
  db.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})
// Creates procurement with total cost and auto increment num
app.put('/api/add-procurement/:total_cost', (req, res) => {
  var query = `INSERT INTO Procurement(totalCost) VALUES(
    ${req.params.total_cost}
      )`
  db.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})



// Function 3
// get procuremnt Number from batch mixin

// app.get('/api/data/procurement', (req, res) => {
//   var query = "SELECT ProcurementOfIngInRec.procurementNum FROM BatchMix INNER JOIN ProcurementOfIngInRec ON BatchMix.recipeID=ProcurementOfIngInRec.recipeID;"
//   db.query(query, function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     res.send(result)
//   });
// })

// Function 4
// Get count of all packages in certain labels
app.get('/api/get-cost/totalcost', (req, res) => {
  var query = `SELECT packageLabel, COUNT(barcode) FROM PackagedProduct
  GROUP BY packageLabel
  ORDER BY COUNT(barcode) DESC`
  db.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})
// Delete all label with certain name
app.delete('/api/delete/:label_type', (req, res) => {
  var query = `DELETE FROM packagedProduct WHERE packageLabel = ${req.params.label_type}`
  db.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})
app.get('/api/get-package/labels', (req, res) => {
  var query = `SELECT * FROM TESTING.PackagedProduct`
  db.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})



app.listen('3000', () => {
  console.log('Server started on port 3000');
});
