const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const UserModel = require('../models/UserModel');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'you must be logged in' });
  }
  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'you must be logged in' });
    }
    const { _id } = payload;
    UserModel.findById(_id)
      .then((userData) => {
        req.user = userData;
        next();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
