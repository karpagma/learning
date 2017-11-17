class Foo {
  constructor(me) {
    this.me = me;
  }

  identify() {
    return `I am ${this.me}`;
  }
}

class Bar extends Foo {
  constructor(me) {
    super(me);
  }

  identify() {
    return `Hello, ${super.identify()}.`;
  }
}

const b1 = new Bar('b1');
console.log(b1.identify());
