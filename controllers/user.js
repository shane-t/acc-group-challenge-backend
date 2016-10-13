const User = require('../models/user.js');

function checkFields(req, res, next) {
    if (!req.body.email) {
        res.status(400).send('email cannot be empty.');
        return;
    }
    if (!req.body.password) {
        res.status(400).send('password cannot be empty.');
        return;
    }

    next();
}

function authMiddleware(req, res) {
    //if (!req.body.email) {
    //    res.status(400).send('email cannot be empty.');
    //    return;
    //}
    //if (!req.body.password) {
    //    res.status(400).send('password cannot be empty.');
    //    return;
    //}
    User.findOne(req.body)
        .then(user => {
            if (!user) {
                res.status(404).send('User did not match.');
            }
            else {
                res.status(200).send('ok.');
            }
        });
}

function registerUser(req, res) {
    const user = new User(req.body);
    user.save()
        .then(result => res.status(200).send(result))
        .catch(err => {
            if (err.code === 11000) {
                res.status(400).send('dup key.');
            } else {
                res.status(500).send(err);
            }
        });
}

function putUser(req, res) {
    User.findOne(req.body)
        .then(user => {
            user.cv = req.body.cv;
        });
}

function serveCV(req, res) {

}

const login = authMiddleware;

module.exports = (server) => {
};
