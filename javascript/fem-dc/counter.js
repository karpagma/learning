const counter = (i = 0) => {
  return {
    up: () => {
      i += 1;
      return i;
    },
    down: () => {
      i -= 1;
      return i;
    }
  };
};

/*const cntr = counter();
const up = cntr.up;
const down = cntr.down;

console.log(up());
console.log(up());
console.log(up());
console.log(down());
console.log(down());
console.log(down());
console.log(down());*/

module.exports = counter;
