var fs    = require("fs");
var Twit = require('twit');

var twit = new Twit({
    consumer_key: 'hhh7SisAGenjXWmNPAlAJPloS',
    consumer_secret: 'tWNXunLEGhzcc7l4bMerMe9iRb44tFbJgjShsTdCCcRnsTeEQ7',
    access_token: '34355774-vpKonYS5BEKyUvdUDKJoyHtQObWPPj5YUim7UNaey',
    access_token_secret: 'GLFUwzeipn14hMoifYaCjwE63QxNKpKU7YL7OKhDQ2BsD'
});

var tweetFile = 'tweets.txt';
var writeStream = fs.createWriteStream(tweetFile, {
    flags    : "a"
});

var cleanBuffer = function(len) {
    var buf = new Buffer(len);
    buf.fill('\0');
    return buf;
};

var check = function() {
    twit.get('search/tweets', {q: '#nodejs since:2013-01-01'}, function(err, reply) {
        var buffer = cleanBuffer(reply.statuses.length * 140);
        reply.statuses.forEach(function(obj, idx) {
            buffer.write(obj.text, idx*140, 140);
        });
        writeStream.write(buffer);
    });
    setTimeout(check, 10000);
};
check();
