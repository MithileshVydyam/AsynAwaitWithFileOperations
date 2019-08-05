import * as util from "util";
import * as fs from "fs";

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
  .then((result) => {
    console.log(result);
    return readPromise("./filePromiseUtil.txt");
  })
  .then((readData) => {
    console.log(readData);
  })
  .catch((err) => {
    console.log(err);
  });

