const express = require('express');
const mysql = require('mysql');
const app = express();

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

// Create connection 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'smallworld',
    database : 'smallworldbakedgoods'
})

// Connect Check
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL Connected...')
});
np