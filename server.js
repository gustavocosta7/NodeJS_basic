

const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const cors = requeire("cors");

//inicia o app
const app = express();
app.use(express.json());
app.use(cors());


//inicia o DB
mongoose.connect(
    "mongodb://localhost:27012/nodeapi",
    {useNewUrlParser: true}
    
);

requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));


app.listen(3001);