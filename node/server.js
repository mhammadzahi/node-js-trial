const http = require('http');
//create ..
const server = http.createServer((req, res) => {
    res.write("Hello");
    res.end();
});

server.listen(9333);