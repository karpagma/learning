function makeTuples(input) {
    var output = [];
    for (var i=1; i<=input.length; i++) {
        for (var j=1; j<=input.length; j++) {
            output.push([i,j])
        }
    }
    return output;
}

var output = makeTuples([1, 2, 3]);
output.forEach(o => console.log(o));
