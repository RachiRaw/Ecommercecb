const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/EcomDB')
    .then(() => { console.log('EcomDB connected!') })
    .catch((err) => console.log(err));



const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server is Up at Port ', PORT);
});