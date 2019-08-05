"use strict";
exports.__esModule = true;
var fs = require("fs");
/*console.log("file read operation start");
fs.readFile("./test.txt", 'utf8', function (err, data) { if (err) { console.log(err); } else { console.log(data) } });
console.log("file operation complete");

console.log("file read operation2 start");
let content: string = fs.readFileSync("./test.txt", 'utf8');
console.log("content of sync :: " + content);
console.log("End of operation2");*/
//write operation
console.log("file write async start");
fs.writeFile("./testWrite.txt", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dui libero. Suspendisse potenti.', function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("file write operation done");
    }
});
console.log("file write async end");
console.log("file write sync start");
fs.writeFileSync("./testWrite.txt", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dui libero. Suspendisse potenti.');
console.log("file write sync end");
