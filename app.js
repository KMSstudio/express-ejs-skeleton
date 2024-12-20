"use strict"

//dotenv
require('dotenv').config();

//module
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();

const path = require('path');
const serveStatic = require('serve-static');

// app
const app = express();

// route to
const home = require("./src/routes");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

// use middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/src/public`));
app.use(cors());
app.use(serveStatic(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));
app.use("/", home);

module.exports = app;