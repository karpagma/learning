//const curry = (func, ...first) => (...second) => func(...first, ...second);
const curry = (func, ...first) => {
  return (...second) => {
    return func(...first, ...second);
  };
};

module.exports = curry;
