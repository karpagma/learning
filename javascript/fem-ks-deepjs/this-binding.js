function foo() {
  console.log(this.bar);
}

var bar = 'bar1';
var o2 = {bar: 'bar2', foo: foo};
var o3 = {bar: 'bar3', foo: foo};

foo(); // default binding
o2.foo(); // implicit binding

foo.call(o3); // explicit binding

function goo() {
  setTimeout(
    function() {
      console.log(this.bar);
    }.bind(this),
    1000
  );
}

var o4 = {bar: 'bar4', goo: goo};
//o4.goo();

foo = foo.bind(o3);
foo.call(o2);

function foose(baz, bam) {
  console.log(`${this.bar} - ${baz} - ${bam}`);
}

var obj = {bar: 'bar'};
var goose = foose.bind(obj, 'baz');

goose('bam'); // ??
