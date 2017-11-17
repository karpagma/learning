const from = require('./from');
const to = require('./to');

const fromTo = (start, end) => {
  return to(from(start), end);
};

/*const index = fromTo(0, 3);
console.log(index());
console.log(index());
console.log(index());
console.log(index());*/

module.exports = fromTo;
