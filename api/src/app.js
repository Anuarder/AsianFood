const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

let port = process.env.PORT || 8081;

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.listen(port);