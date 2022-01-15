const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', (req, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogsRouter.post('/', (req, response, next) => {
  const body = req.body;

  const blog = new Blog(body);

  blog.save()
    .then((result) => {
      response.status(201).json(result);
    });
});

module.exports = blogsRouter;
