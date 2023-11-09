/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { writeFile } from "node:fs";
let counter = 1;

inquirer
  .prompt([
    {
      message: "What's your URL?",
      name: "url",
    },
    /* Pass your questions in here */
  ])
  .then((answer) => {
    // Use user feedback for... whatever!!
    let inputUrl = answer.url;
    var qr_svg = qr.image(inputUrl);
    const pathInit = "qr_img.png";
    const path = "qr_img" + counter + ".png";

    console.log(path);
    console.log(counter);

    try {
      if (fs.existsSync(pathInit)) {
        qr_svg.pipe(fs.createWriteStream(path));
      } else {
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
      }
    } catch (err) {
      console.error(err);
    }

    // writeFile('message.txt', inputUrl, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    //   });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
