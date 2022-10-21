//Requirements
const fs = require('fs');
const request = require('request');

//Variables for command line inputs
const args = process.argv;
const inputURL = args[2];
const inputLocal = args[3];


//Request function with URL input
request(inputURL, (error, response, content) => {
  //If there is an error, print it to the console
  if (error) {
    console.log("Error:", error);
  }
  //If there are no errors and a response was received, then we carry on
  if (response) {
    //Write the file to our local file path
    fs.writeFile(inputLocal, content, error => {
      //If there is an error here, print it to the console
      if (error) {
        console.error(error);
      }
      //Variable for file size
      const size = content.length;
      //If there are no errors, print the success message to the console
      console.log(`Downloaded and saved ${size} bytes to ${inputLocal}`);
    });
  }
});