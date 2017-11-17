const foo = () => {
  console.log(this.name);
}

function foo1() {
  console.log(this.name);
}

const obj = {
  name: 'madhan'
};

const foob = foo.bind(obj);
foob();
