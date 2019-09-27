require('../models/db');

const express = require('express');
const path = require('path');
const userController = require('./userController');



const http = require('http');
const server = http.createServer();

const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const port = 3000;
app.set('views', path.join(__dirname, '/views'));

app.use(body_parser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(body_parser.json());


app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
})
app.use('/', userController);