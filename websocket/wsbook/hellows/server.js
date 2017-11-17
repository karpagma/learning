var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});

wss.on('connection', ws => {
    console.log('client connected');
    ws.on('message', msg => {
        console.log(msg);
    });
});
