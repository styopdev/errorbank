const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String, required: false },
  created: { type: String, required: true },
  updated: { type: String, required: false },
  tags: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Tag', required: false} ],
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Post', postSchema);
