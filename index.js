require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const mongoose = require('mongoose');
const admnroutes = require('./routes/adminRoutes')
const customroutes = require('./models/customerModel')
const customerRoutes = require('./routes/customloginRouter')
const forgtpassRoutes=require('./routes/forgotpasswd')

var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Danish12:Danish@cluster0.vma7rgk.mongodb.net/RangePlus')
.then(() => console.log('Connected Successfully'))
    .catch((err) => console.error(err));

//Routes

app.get('/auth', function (req, res) {
  res.send('hello world');
});

app.use('/auth/admin',admnroutes);
app.use('/auth/custom',customroutes);
app.use('/auth/customer',customerRoutes);
app.use('/auth/forgot',forgtpassRoutes);

app.use(express.json({ extended: false }));
app.listen(3001, function () {
  console.log('Server is Up');
});



