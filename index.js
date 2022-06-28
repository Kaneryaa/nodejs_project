require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
var app = express();
app.use(cors());
const admnroutes = require('./routes/adminRoutes')

app.use(express.json());

//mongoose
mongoose.connect('mongodb://localhost:27017/RangePlus')
.then(() => console.log('Connected Successfully'))
    .catch((err) => console.error(err));

//Routes

app.get('/auth', function (req, res) {
  res.send('hello world');
});

app.use('/auth/admin',admnroutes);

app.use(express.json({ extended: false }));
app.listen(3001, function () {
  console.log('Server is Up');
});

//Routes ends


