var childProcess = require('child_process');
var child = childProcess.fork(__dirname + '/child.js');

child.on('message', msg => {
    console.log('child said', msg);
});

console.log('parent running in process ' + process.pid);
child.send('hello how are you');
