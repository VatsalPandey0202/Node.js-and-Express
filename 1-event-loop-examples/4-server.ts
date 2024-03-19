import http from 'http';

const server = http.createServer((req,res) => {
    console.log('Request event');
    res.end("Hello Wolrd");
})

server.listen(5000, () => {
    console.log('Server is lostening on port: 5000....');
})