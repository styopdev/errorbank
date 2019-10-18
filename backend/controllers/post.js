const Post = require('../models/post');

exports.createPost = (req, res, next) => {
  console.log('req.body ', req.body);
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then(createdPost => {
    console.log('createdPost : ', createdPost);
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id,
      post: createdPost
    });
  });

};

exports.getPosts = (req, res, next) => {
  Post.find().then(documents => {
    console.log('documents', documents);
    res.status(200).json({ // retrieve all posts from db
      message: 'Posts fetched successfully!',
      posts: documents
    });
  });

};

exports.getPostById = (req, res, next) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    console.log('findOne', post);
    res.status(200).json({
      message: `Post with id:${req.params.id} fetched successfully!`,
      post: post
    });
  });

};

exports.editPostById = (req, res, next) => {
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;
  Post.findById({ _id: req.params.id })
    .then(post => {
      post.title = updatedTitle;
      post.content = updatedContent;
      return post.save();
  }).then(result => {
    res.status(200).json({
      message: `Post with id:${req.params.id} updated successfully!`,
      post: result
    });
  });

};

exports.deletePostById = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(post => {
    console.log('deleteOne ', post);
    res.status(200).json({ // retrieve all posts from db
      message: `Post with id:${req.params.id} deleted successfully!`,
    });
  });

};
