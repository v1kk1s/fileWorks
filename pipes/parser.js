const fs = require('fs');
const trumpet = require('trumpet');
const through = require('through2');

const tr = trumpet();
tr.selectAll('.loud', (elem) => {
  const stream = elem.createStream();
  stream.pipe(through(function (elem, _, next) {
    this.push(elem.toString().toUpperCase());
    next();
  })).pipe(stream); // elem is duplex pipe
});

fs.createReadStream('./example.html').pipe(tr).pipe(process.stdout);
