process.on('message', msg => {
    console.log('parent said', msg);
    process.send('i am chile with pid ' + process.pid);
});
