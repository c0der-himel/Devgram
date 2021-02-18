const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserModel = require('../models/User');

router.get('/', (req, res) => {
  res.send('Hello');
});

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(422).json({ error: 'Please, fill all the fields' });
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

module.exports = router;
