// Create web server
// 1. Import express
// 2. Create an express server
// 3. Create a route for GET /comments that returns all comments
// 4. Create a route for POST /comments that adds a new comment
// 5. Create a route for GET /comments/:id that returns the comment with the specified ID
// 6. Create a route for PUT /comments/:id that updates the comment with the specified ID
// 7. Create a route for DELETE /comments/:id that deletes the comment with the specified ID
// 8. Start the server on port 3000

// 1. Import express
const express = require('express');

// 2. Create an express server
const app = express();
app.use(express.json());

// 3. Create a route for GET /comments that returns all comments
const comments = [
    { id: 1, author: 'Alice', text: 'I love apples' },
    { id: 2, author: 'Bob', text: 'I love bananas' },
    { id: 3, author: 'Charlie', text: 'I love cherries' }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

// 4. Create a route for POST /comments that adds a new comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.status(201).json(newComment);
});

// 5. Create a route for GET /comments/:id that returns the comment with the specified ID
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

// 6. Create a route for PUT /comments/:id that updates the comment with the specified ID
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    if (comment) {
        comment.author = req.body.author;
        comment.text = req.body.text;
        res.json(comment);
    } else {
        res.status(404).