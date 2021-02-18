const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const { MONGOURI } = require('./keys');
const UserModel = require('./models/User');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(/* html */ `<h1>Hello World</h1>`);
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log('Connected to Database');
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
