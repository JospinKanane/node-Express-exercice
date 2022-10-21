const express = require('express');
const app = express();
const pug = require('pug');


app.set('view engine', 'pug');
app.set('views','views');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.get('/visit', (req, res) => {
    res.render('visit')
});

app.listen(1111, () =>{
    console.log('listening on port 1111');
});