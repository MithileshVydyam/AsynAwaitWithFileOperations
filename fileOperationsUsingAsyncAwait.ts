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

async function fileOperation() {
  try {
    let fileContent1 = readPromise('./filePromiseAsync.txt');
    console.log("after fileContent1 ");
    console.log(fileContent1);
    console.log("1");
    console.log("2");
    console.log("3");
    let data = await fileContent1;
    console.log(data);
    await writeFilePromise("./filePromiseAsync.txt", "Loreum ipsum dollar sit.");
    let fileContent2 = await readPromise('./filePromiseAsync.txt');
    console.log(fileContent2);
  } catch (err) {
    console.log(err);
  }
}

fileOperation();

