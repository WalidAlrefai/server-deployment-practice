'use strict'

// const req = require("express/lib/request")

require('dotenv').config();

const server =require('./server.js');
server.start(process.env.PORT || 3001);