var orderStatus = require('./getOrderStatus');

var context = {
    succeed: function(order) {
        console.log(JSON.stringify(order)); // eslint-disable-line no-console
    }
};

orderStatus.handler({orderId: 'abc'}, context);
