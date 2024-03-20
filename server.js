const http = require('http');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    console.log('OPTIONS');
    res.writeHead(200);
    res.end();
    return;
  }

  switch (req.url) {
    case '/checkout':
      res.writeHead(200);
      res.end(JSON.stringify({ order: { id: 1, name: 'Order 1' } }));
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
}).listen(3005);

console.log('HTTP Server running on port 3005...')
