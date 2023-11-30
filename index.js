const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.end('allah is almighty');
})

const os = require('os');
const osInfo = os.freemem();

console.log(osInfo);