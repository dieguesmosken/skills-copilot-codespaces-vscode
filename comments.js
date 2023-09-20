// Create web server with Express.js
const express = require('express');
const app = express();
const port = 3000;

// Importing the comments.json file
const comments = require('./comments.json');

// Creating a GET route that returns the comments object
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Creating a GET route that returns a single comment object
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  res.send(comment);
});

// Creating a POST route that adds a new comment object to the comments.json file
app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    name: req.body.name,
    comment: req.body.comment
  };

  comments.push(newComment);
  res.send(newComment);
});

// Creating a PUT route that updates a comment object in the comments.json file
app.put('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));

  comment.name = req.body.name;
  comment.comment = req.body.comment;

  res.send(comment);
});

// Creating a DELETE route that deletes a comment object from the comments.json file
app.delete('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  const index = comments.indexOf(comment);

  comments.splice(index, 1);

  res.send(comment);
});

// Listening on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});