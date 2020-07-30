const args = process.argv.slice(2);
const url = args[0];
const path = args[1];



const fs = require('fs');


const request = require('request');
request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  fs.writeFile(path, body, { encoding: 'utf8' }, (err, data) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});

