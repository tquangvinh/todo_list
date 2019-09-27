const express = require('express');
const route = express.Router();
const path = require('path');

var serveStatic = require('serve-static');
const app = express();
const mongoose = require('mongoose');
require('../models/db');

const user = mongoose.model('user');
const work = mongoose.model('work');

const port = 8000;

app.use(serveStatic(path.join(__dirname, '')));
app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
})
app.get('/register', (req, res) => {
    res.redirect('/REGISTER/register.html');
});
app.get('/', (req, res) => {
    res.redirect('/LOGIN/login.html');
})

app.get('/work', (req, res) => {
    res.redirect('/WORK/work.html');
})

app.get('/get_work', (req, res) => {
    work.find({}).populate('person_').exec((err, results) => {
        if (err) {
            console.log("ERR" + err);
        } else {
            res.send(results);
        }
    })
})

app.get('/get_id/:id', (req, res) => {
    const _id = req.params.id;
    // console.log(_id);
    work.findById(_id, (err, id) => {
        if (err) throw err;
        else {
            res.send(id);
        }
    })

})