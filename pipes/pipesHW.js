var split = require('split');
var fs = require('fs');
var readable = fs.createReadStream('./hw.log');
var writable = fs.createWriteStream('./big.file');

readable
  .pipe(split('2018'))
  .on('data', (chunk) => {
    const chunkStr = chunk.toString();
    if (chunkStr.includes('JavaScript')) {
      writable.write(chunk);
    }
  });