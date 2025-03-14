// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const { id, body } = req.body;
  comments.push({ id, body });
  res.json({ id, body });
});

app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});

const comments = [
  {
    id: 1,
    body: 'This is a comment'
  }
];