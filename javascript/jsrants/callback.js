function Foo() {
    this.name = 'jar';
}

Foo.prototype.callme = function() {
    setTimeout(function() {
        console.log(this.name);
    }, 1000);
}

var foo = new Foo();
foo.callme();

