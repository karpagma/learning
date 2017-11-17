var net = require('net');

for (var i=0; i<100; i++) {
    var client = new net.Socket();
    client.connect(1337, '127.0.0.1', function() {
        console.log('Connected');
        client.write('Hello, server! Love, Client.');
    });

    client.on('data', function(data) {
        console.log('Received: ' + data);
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
}
