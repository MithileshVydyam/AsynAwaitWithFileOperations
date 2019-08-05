"use strict";
exports.__esModule = true;
var fs = require("fs");
function writeFilePromise(file, data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve("Write operation done!");
            }
        });
    });
}
function readPromise(file) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
writeFilePromise("E://filePromise.txt", "Loreum ipsum dollar sit.")
    .then(function (result) {
    console.log(result);
    return readPromise("./filePromise.txt");
}).then(function (readData) {
    console.log(readData);
})["catch"](function (err) {
    console.log(err);
});
