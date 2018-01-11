const fs = require('fs');
const server = require('http').createServer();
//req, res - are pipes too

server.on('request', (req, res) => {
  fs.createReadStream('./big.file').pipe(res); // 16mb chunks
});

server.listen(8000);