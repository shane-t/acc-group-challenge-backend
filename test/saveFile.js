var saveFile = require('../modules/saveFile');
var fs = require('fs');


before(done => {

  var sampleCv = fs.readFileSync('./cv.doc');

  console.log(sampleCv);

});

describe('#saveFile', done => {

  it('should save a file without errors', done => {

    saveFile(saveFile).then(res => {

      console.log(res);

    });

  });

});
