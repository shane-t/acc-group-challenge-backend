const User = require('../model/user.js');

const saveFile = require('../modules/saveFile.js');
const getFile = require('../modules/getFile.js');

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
            saveFile(user.cv)
                .then(result => {
                    res.status(200).send(result);
                })
                .catch(err => res.status(500).send(err));
        });
}

function serveCV(req, res) {
    getFile(req.body.email).then((result) => {
        if (!result) {
            res.status(404).send('not found.');
        }
        res.send(result);
    });
}

function getUser(req, res) {
    User.findOne(req, user => {
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send('not found.');
        }
    });
}

const login = authMiddleware;

module.exports = (server) => {
    server.post('/login/', checkFields, login);
    server.post('/users/', checkFields, registerUser);
    server.put('/users/', authMiddleware, registerUser);
    server.get('/users/:email', checkFields, authMiddleware, getUser);
    server.get('/users/:email/cv', serveCV);
};
