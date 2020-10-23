const mysql = require('mysql2');
 require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const { json } = require('body-parser');
const mainRoute = require('./routes/open');
const authRoute = require('./routes/postReq');
const campRoute = require('./routes/campus');
const cors = require('cors');
const corsOptions ={
  "Access-Control-Allow-Origin" : "*", 
"Access-Control-Allow-Credentials" : true 
};


 console.log(__dirname);


  db.authenticate()
  .then(()=>console.log("Database connected Yea"))
  .catch(err => console.log('Error:' + err))


const app = express();
//Middleware for handlebars
/* app.engine('hbs',exphbs({extname:'.hbs', defaultLayout:'main',layoutsDir:__dirname +'/views/layout'}));
app.set('view engine','hbs'); */


// using cors for cross origin requests
app.options('*', cors());
//set static folder
app.use(express.static(path.join(__dirname, '/css/main')));
//express using json can read it
app.use(express.json());

//Routes unprotected
app.use('/',mainRoute);
app.use('/api',authRoute);
//Routes protected
app.use('/api/campus',campRoute);
//app.use('/user',require('./routes/protected'))

//Middleware


const PORT =process.env.PORT || 5000;

app.listen(PORT,console.log(`running on port ${PORT}`));