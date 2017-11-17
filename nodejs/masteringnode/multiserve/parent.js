var child = require('child_process').fork('./child');
var server = require('net').createServer();
server.on('connection', socket => {
    socket.end('parent handled connection');
});

server.listen(1337, () => {
    child.send('parent message', server);
});
