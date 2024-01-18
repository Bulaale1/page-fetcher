/* eslint-disable func-style */
/* eslint-disable linebreak-style */
// /* eslint-disable linebreak-style */
// /* eslint-disable func-style */
const request = require('request');
const fs = require('fs');

const urlAndFilePath = process.argv.slice(2);
const url = urlAndFilePath[0];
const filePath = urlAndFilePath[1];
function downloadPage(url, filePath) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error downloading the page:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Failed to download the page. Status code:', response.statusCode);
      return;
    }

    fs.writeFile(filePath, body, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`Page downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    });
  });
}

if (!url || !filePath) {
  console.error('Please provide both a URL and a file path.');
} else {
  
  downloadPage(url, filePath);
}