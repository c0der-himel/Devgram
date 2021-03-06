const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../keys');
const UserModel = require('../models/UserModel');
const requireLogin = require('../middleware/requireLogin');

router.get('/', (req, res) => {
  res.send('Hello');
});

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: 'Please, fill all the fields' });
  }
  UserModel.findOne({ email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: 'Please, fill all the fields' });
      }
      bcrypt.hash(password, 11).then((hashedPassword) => {
        const user = new UserModel({
          name,
          email,
          password: hashedPassword,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: 'data saved' });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/signin', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: 'please, fill all the fields' });
  }
  UserModel.findOne({ email })
    .then((savedData) => {
      if (!savedData) {
        return res.status(422).json({ error: 'invalid email or password' });
      }
      bcrypt
        .compare(password, savedData.password)
        .then((doMatch) => {
          if (doMatch) {
            // res.json({ message: 'successfully signed in' });
            const token = jwt.sign({ _id: savedData._id }, JWT_SECRET);
            const { _id, name, email } = savedData;
            res.json({ token, user: { _id, name, email } });
          } else {
            return res.status(422).json({ error: 'invalid email or password' });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
