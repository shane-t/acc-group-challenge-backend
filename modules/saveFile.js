var fs = require('fs');

function saveFile(fileName, buffer) {

  return new Promise(function (resolve, reject) {

    fs.writeFile('./cvStorage/' + fileName, buffer, function (err, result) {
      console.log("File written");
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }

    });

  });

}

module.exports = saveFile;
