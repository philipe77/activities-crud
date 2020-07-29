const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());
//iniciando o bd
mongoose.connect('mongodb://localhost/nodeapi', { useUnifiedTopology: true }).
    then(conn => console.log("algum código caso a conexão for ok"))
    .catch(err => console.log("algum código caso de erro", err));

requireDir("./src/models");

//rotas
app.use('/api', require('./src/routers'));

app.listen(3001);