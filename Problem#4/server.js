const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3045;

const server = http.createServer(app);
server.listen(port);
