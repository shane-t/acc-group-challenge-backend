var fs = require('fs');

function getFile(fileName, buffer) {

  return new Promise(function (resolve, reject) {

    fs.readFile(filename, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);

      }

    });

  });

}

module.exports = getFile;
