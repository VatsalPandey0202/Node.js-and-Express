import http from 'http';

const server = http.createServer();

server.on('request', (req,res) => {
    res.end('Welcome');
})