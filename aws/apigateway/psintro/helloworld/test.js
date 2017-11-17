var inventory = require('./index');

var context = {
    succeed: function(items) {
        items.forEach(function(i) {
            console.log(JSON.stringify(i));
        });
    },
    done: function(c, r) {
        console.log(r);
    }
};
inventory.handler({}, context);

