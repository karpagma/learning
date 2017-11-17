var EventEmitter = require('events').EventEmitter;
var Counter = function(init) {
    this.increment = function() {
        init++;
        this.emit('incremented', init);
    }
}
Counter.prototype = new EventEmitter();

var counter = new Counter(10);
counter.on('incremented', count => {
    console.log(count);
});

counter.increment();
counter.increment();
