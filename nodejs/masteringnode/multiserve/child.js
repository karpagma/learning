process.on('message', (msg, server) => {
    console.log(msg);
    server.on('connection', socket => {
        socket.end('child handled connection');
    });
});
