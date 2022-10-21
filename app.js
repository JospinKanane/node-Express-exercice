const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/pages/index.html`);
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+`/pages/contact.html`);
});

app.get('/visit', (req, res) => {
    res.sendFile(__dirname+`/pages/visit.html`);
});


app.listen(5522, ()=>{
    console.log('listening on port 5522');
});