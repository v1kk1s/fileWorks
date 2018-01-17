const split = require('split');
const readable = fs.createReadStream('./hw.log');
const writable = fs.createWriteStream('./big.file');

readable
  .pipe(split(new RegExp(/JavaScript \w+/), null, { trailing: false }))
  .on('data', (chunk) => {
    writable.write(chunk);
  });