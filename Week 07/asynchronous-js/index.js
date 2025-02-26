const fs = require("fs");
// const fsv2 = require("fs/promises");

console.log("Starting Program");

// Sync
// const content = fs.readFileSync("./sample.txt", "utf-8");
// console.log("File Reading Success", content);
// fs.writeFileSync("JAVAscriptKiFileHAHaha.txt", content);
// const maamla = fs.readFileSync("./JAVAscriptKiFileHAHaha.txt", "utf-8");
// console.log("File Reading Success", maamla);
// fs.unlinkSync("./sample.txt");

// Async
// Callback Hell
/*
Callback hell is a situation in JavaScript where callbacks are nested within other callbacks, making the code hard to read and debug. It's also known as the "pyramid of doom" because the indentation resembles a pyramid on its side. 

Why is callback hell a problem? 
It can be difficult to handle errors.
It can be difficult to maintain and reason about the code.
It can lead to bugs.

How can I avoid callback hell? 
Use promises instead of callbacks.
Use async/await to write asynchronous code that looks more like synchronous code.
*/
// Legacy Code
// fs.readFile("./sample.txt", "utf-8", function (error, content) {
//   if (error) {
//     console.log("Error in file handling ", error);
//   } else {
//     console.log("File Reading Success", content);
//     fs.writeFile("JAVAscriptKiFileHAHaha.txt", content, function (error) {
//       if (error) {
//         console.log("Error in writing JAVAscriptKiFileHAHaha.txt", error);
//       } else {
//         fs.unlink("./sample.txt", function (error) {
//           if (error) {
//             console.log("Error in deleting sample.txt", error);
//           } else {
//             console.log("Success in deleting sample.txt");
//           }
//         });
//       }
//     });
//   }
// });

// or(Async) Modern Code
// fsv2
//   .readFile("sample.txt", "utf-8")
//   .then((content) => {
//     fsv2.writeFile("unique.txt", content);
//   })
//   .then(() => {
//     fsv2.unlink("sample.txt");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/*
   We are doing promisification => legacy code(callback) to Modern Custom Promisified Version

   Legacy code to Modern code ie (Callback Support => Custom Promises) => Promisification
*/

function readFileWithPromise(filePath, characterEncoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, characterEncoding, (error, content) => {
      if (error) {
        reject(error);
      } else {
        resolve(content);
      }
    });
  });
}

function writeFileWithPromise(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function unlinkWithPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// readFileWithPromise("sample.txt", "utf-8")
//   .then((content) => {
//     writeFileWithPromise("modern.txt", content);
//   })
//   .then(() => {
//     unlinkWithPromise("sample.txt");
//   })
//   .catch((error) => {
//     console.log("Error is ", error);
//   })
//   .finally(() => {
//     console.log("All done");
//   });

/*
   The above .then() chaining can become hard to read and manage, especially with multiple asynchronous operations.
   
   To improve readability, we use async/await. 

   - async/await is syntactic sugar over Promises.
   - It allows writing asynchronous code in a more synchronous-looking manner.
   - Behind the scenes, async/await still works with Promises and does not block the event loop.
   - It makes the code cleaner and easier to understand.

   Below is the refactored version using async/await:
*/

function rukoSaraSabarKaro(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });
}

async function doTask() {
  try {
    const content = await readFileWithPromise("sample.txt", "utf-8");
    await writeFileWithPromise("modern.txt", content);
    await rukoSaraSabarKaro(10);
    await unlinkWithPromise("sample.txt");
  } catch (error) {
    console.log("Error is ", error);
  } finally {
    console.log("All done");
  }
}

doTask().then(() => {
  console.log("Sab Kuch Hogaya Hai");
});

console.log("Ending Program");
