const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const productroutes = require('./routes/product');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/EcomDB')
    .then(() => { console.log('EcomDB connected!') })
    .catch((err) => console.log(err));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Working Fine!');
});

app.use(productroutes);

      
const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server is Up at Port ', PORT);
});