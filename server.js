'use strict';
require('./server/config/config');
const http = require('http');
const express = require('express');

// Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const router = require('./router');
const app = express();

// DB Setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);


app.use(express.static(__dirname + '/build'));
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));

// router(app) sets up the routes for app
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});