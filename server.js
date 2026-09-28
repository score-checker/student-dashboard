const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const relative = pathname.replace(/^\/+/, '');
  const candidate = path.resolve(root, relative || 'index.html');
  const safe = candidate.startsWith(root + path.sep) || candidate === path.join(root, 'index.html');
  const file = safe && fs.existsSync(candidate) && fs.statSync(candidate).isFile() ? candidate : path.join(root, 'index.html');
  res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

const port = Number(process.env.PORT || 4173);
server.listen(port, '127.0.0.1', () => console.log(`Dashboard available at http://127.0.0.1:${port}`));
