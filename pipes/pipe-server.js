const http = require('http');
const throught = require('through2');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(throught(function(content, _, next) {
      this.push(content.toString().toUpperCase());
      next();
    })).pipe(res);
    return;
  }
});

server.listen(8000);