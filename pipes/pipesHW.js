var split = require('split');
var fs = require('fs');
var readable = fs.createReadStream('./hw.log');
var writable = fs.createWriteStream('./big.file');

readable
  .pipe(split(/JavaScript \w+/))
  .on('data', (chunk) => {
    writable.write(chunk);
  });