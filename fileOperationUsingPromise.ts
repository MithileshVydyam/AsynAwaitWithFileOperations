import * as fs from "fs";

function writeFilePromise(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Write operation done!");
      }
    })
  });
}

function readPromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}

writeFilePromise("./filePromise.txt", "Loreum ipsum dollar sit.")
  .then((result) => {
    console.log(result);
    return readPromise("./filePromise.txt");
  })
  .then((readData) => {
    console.log(readData);
  })
  .catch((err) => {
    console.log(err);
  });

