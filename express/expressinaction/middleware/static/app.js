const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const staticPath = path.resolve(__dirname, 'public');
app.use(express.static(staticPath));

app.use((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('looks like you didn"t fetch the static file');
});

http.createServer(app).listen(3000, () => {
    console.log('app listening in port 3000');
});