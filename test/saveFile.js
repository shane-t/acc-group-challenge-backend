var saveFile = require('../modules/saveFile');
var fs = require('fs');
var path = require('path');

var sampleCv;


before(done => {

  sampleCv = fs.readFileSync(__dirname + '/cv.doc');

  done();

});

describe('#saveFile', done => {

  it('should save a file without errors', done => {

    saveFile('cv-test.doc', sampleCv).then(res => {

      console.log(res);

      done();

    }).catch(err => console.log(err));

  });

});
