const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config');
const mongoose = require('mongoose');

const recipeRouter = require('./routers/recipe');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());


app.use(recipeRouter);

mongoose.connect(config.database_url, {useNewUrlParser: true}, (err) => {
    if(err) throw err;
    app.listen(config.port, () => console.log("Server running on port " + config.port));
})

