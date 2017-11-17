const filter = (itr, predicate) => {
  return function recur() {
    var value = itr();
    if (value === undefined || predicate(value)) {
      return value;
    }
    return recur();
  };
};

/*const fil = filter(fromTo(0, 5), i => i % 3 === 0);
console.log(fil());
console.log(fil());
console.log(fil());*/

module.exports = filter;
