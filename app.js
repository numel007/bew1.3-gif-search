// Require Libraries
require('dotenv').config();
const express=require('express');
const Tenor = require("tenorjs").client({
    "Key": process.env.API_KEY,
    "Filter":"high",
    "Locale":"en_US"
});

// App Setup
const app=express();

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    var term = ""
    if (req.query.term) {
        term = req.query.term
    }

    Tenor.Search.Query(term,"10").then(response => {
        const gifs = response;
        res.render('home', {gifs})
    }).catch(console.error);
})

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', {name});
})

// Start server
app.listen(3000, () => {
    console.log('Gif search listening on port localhost:3000');
})