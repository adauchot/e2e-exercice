const http = require('http');

http.createServer(function (req, res) {
  switch (req.url) {
    case '/orders':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ order: { id: 1, name: 'Order 1' } }));
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
}).listen(3005);

console.log('HTTP Server running on port 3005...')
