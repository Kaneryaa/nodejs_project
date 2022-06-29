require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const customer = require('./routes/customerRoute');
var app = express();
app.use(cors());

//Routes
app.get('/auth', function (req, res) {
  res.send('hello world');
});
app.use(express.json({ extended: false }));
app.listen(3001, function () {
  console.log('Server is Up');
});
app.use('/auth/customer',customer);
let mongoDB = 'mongodb://localhost/rangeplus';
//Routes ends

//let mongoDB = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true});

mongoose.connection.once("open",function(){
  console.log("Database connected Successfully");
}).on("error",function(err){
  console.log("Error", err);
})