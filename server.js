

const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');

//inicia o app
const app = express();


//inicia o DB
mongoose.connect(
    "mongodb://localhost:27012/nodeapi",
    {useNewUrlParser: true}
    
);

requireDir('./src/models');

const Product = mongoose.model('Product');


//primeira rota
app.get('/',(req, res) => {
    Product.create({
        title: 'ReactJSNative',
        description: 'Curso muito top de react js',
        url: 'www.google.com',


    });
   return res.send('Ola galers');
});

app.listen(3001);