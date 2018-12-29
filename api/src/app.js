const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/AsianFood');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


require('./routes/index')(app);


app.listen(config.port);