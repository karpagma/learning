var moment = require('moment');

exports.handler = function(event, context) {
    var input1 = event.input || 'Hello';
    var input2 = event.input || 'World';
    
    var response = input1 + ' ' + input2 + ' ' + moment().toString()
    context.done(null, {response: response});
};
