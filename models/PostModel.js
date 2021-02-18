const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: 'No Photo',
  },
  postedBy: {
    type: ObjectId,
    ref: 'user',
  },
});

const PostModel = mongoose.model('post', postSchema);

module.exports = PostModel;
