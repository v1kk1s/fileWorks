const { Readable } = require('stream');
const request = require('request');

const r = request.post('http://localhost:8000/');
const rs = Readable();

rs._read = () => {
  rs.push('I`m a little tea cup! ☕ ');
  rs.push(null); // the end of our read stream
};

rs.pipe(r).pipe(process.stdout);
