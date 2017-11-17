var inventory = require('./index');

var context = {
    succeed: function(items) {
        items.forEach(function(i) {
            console.log(JSON.stringify(i)); // eslint-disable-line no-console
        });
    }
};
inventory.handler(null, context);
