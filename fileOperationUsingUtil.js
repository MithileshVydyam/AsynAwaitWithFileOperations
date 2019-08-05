"use strict";
exports.__esModule = true;
var util = require("util");
var fs = require("fs");
function writeFilePromise(file, data) {
    /*let writeFile123 = util.promisify(fs.writeFile);
    return writeFile123(file, data);*/
    return util.promisify(fs.writeFile)(file, data);
}
function readPromise(file) {
    /* let readFile123 = util.promisify(fs.readFile);
     return readFile123(file, 'utf8'); */
    return util.promisify(fs.readFile)(file, 'utf8');
}
writeFilePromise("./filePromiseUtil.txt", "Loreum ipsum dollar sit.")
    .then(function (result) {
    console.log(result);
    return readPromise("./filePromiseUtil.txt");
})
    .then(function (readData) {
    console.log(readData);
})["catch"](function (err) {
    console.log(err);
});
