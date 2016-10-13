const
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

const port = 8080;

mongoose.connect('mongodb://localhost/accenture')
    .then(() => {
        server.listen(8080, (err) => {
            if (err) {
                console.log('err occured');
            }
            else {
                console.log('server started listening at port:', port);
            }
        });
    });
