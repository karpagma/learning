exports.handler = function(event, context) {
    context.succeed('Hello,' + event.username);
}
