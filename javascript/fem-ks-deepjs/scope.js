function foo() {
  return goo();

  function goo() {
    return 'hello';
  }
}

console.log(foo());
