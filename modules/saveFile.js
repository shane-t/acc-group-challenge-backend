var fs = require('fs');

function saveFile(fileName, buffer) {

  return new Promise(function (resolve, reject) {

    fs.writeFile('./cvStorage/' + filename, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);

      }

    });

  });

}

module.exports = saveFile;
