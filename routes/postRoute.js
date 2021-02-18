const express = require('express');
const router = express.Router();

const PostModel = require('../models/PostModel');
const requireLogin = require('../middleware/requireLogin');

router.get('/all-post', (req, res) => {
  PostModel.find()
    .populate('postedBy', '_id name')
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/create', requireLogin, (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(422).json({ error: 'please, fill all the fields' });
  }
  req.user.password = undefined;
  const post = new PostModel({
    title,
    body,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/my-posts', requireLogin, (req, res) => {
  PostModel.find({ postedBy: req.user._id })
    .populate('postedBy', '_id name')
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
