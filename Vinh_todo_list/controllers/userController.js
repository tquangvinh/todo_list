const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const acl = require('acl');
// acl = new acl(new acl.redisBackend(redisClient, prefix));
const user = mongoose.model('user');
const work = mongoose.model('work');

router.get('/', (req, res) => {
    res.send('please turn on client.')
})
router.post('/register', (req, res) => {
    const db = new user();
    db.email = req.body.email;
    db.password = req.body.password;
    db.full_name = req.body.full_name;
    user.findOne({ email: db.email }, (err, docs) => {
        if (docs) {
            res.send({ err: ' Email is already in use.' })
        } else {
            db.save((err, docs) => {
                if (err) {
                    console.log('err' + err);
                } else {
                    res.send(docs);
                }
            })
        }
    });
});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    user.findOne({ 'email': email, 'password': password }, (err, data) => {
        if (err) {
            res.send({ err: 'err!' });
        }

        if (data) {
            res.send(data);
        }
    })
})
router.post('/work', (req, res) => {
    const db = new work();
    db.name_work = req.body.name_work;
    db.person_ = req.body._id;
    db.save((err, docs) => {
        if (err) {
            console.log('err' + err);
        } else {
            res.send(docs);
        }

    })
})
router.post('/edit_work', (req, res) => {
    work.updateOne({}, { name_work: req.body.name_work }, { upsert: true }, function(err, docs) {
        if (err) {
            console.log('err');
        }
        if (docs) {
            res.send(docs);
        }
    })
})
router.delete('/delete_work/:id', (req, res) => {
    work.findByIdAndDelete(req.params.id, (err, docs) => {
        if (err) throw err;
        if (docs) {
            res.send(docs);
        }

    })
})


module.exports = router;