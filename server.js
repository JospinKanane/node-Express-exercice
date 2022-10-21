const express = require('express');
const app = express();
const indexRouter = require('./Routes/indexRouter');
const contactRouter = require('./Routes/contactRouter');
const visitRouter = require('./Routes/visitRouter');
const pug = require('pug');


app.set('view engine', 'pug');
app.set('views','views');

app.use('/', indexRouter);

app.use('/contact', contactRouter);

app.use('/visit', visitRouter);

app.listen(1111, () =>{
    console.log('listening on port 1111');
});