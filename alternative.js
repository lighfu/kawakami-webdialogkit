const http = require('http');
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
    	console.log(body);
    	process.exit();
    });
  }
});

server.listen(29945, () => {
  //console.log('Server is listening on port 8080');
});