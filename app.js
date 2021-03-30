// Require Libraries
const express=require('express');

// App Setup
const app=express();

// Middleware

// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
})

// Start server
app.listen(3000, () => {
    console.log('Gif search listening on port localhost:3000');
})