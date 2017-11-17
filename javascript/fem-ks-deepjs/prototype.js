function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return `i am ${this.me}`;
};

function Bar(who) {
  Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  return `Hello, ${this.identify()}.`;
};

var b1 = new Bar('b1');
var b2 = new Bar('b2');

console.log(b1.speak());
console.log(b2.speak());
