const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose
  .connect(
    'mongodb+srv://jeongwon:rose5612@cluster0.9j6oxxs.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, function () {
  console.log('Listening on port 8080');
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/shorts', require('./routes/short'));

var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
