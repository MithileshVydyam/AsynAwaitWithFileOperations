import * as fs from "fs";

/*function readFile() {
  fs.readFile("./file1.txt", 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data)
    }
  });
}

function writeFile() {
  fs.writeFile("./file1.txt", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dui libero. Suspendisse potenti.', function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("file write operation done");
      readFile();
    }
  });
}*/

let result = fs.writeFile("./file1.txt", 'Lorem ipsum dolor sit', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file write operation done");
    return fs.readFile("./file1.txt", 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        return "success";
      }
    });
  }
});

console.log("result :: " + result);

