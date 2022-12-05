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
    host     : 'localhost',
    user     : 'root',
    password : 'smallworld',
    database : 'SmallWorld'
})

//Connect Check
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL Connected...')
});

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
