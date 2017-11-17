const revocable = binf => {
  let revoked = false;
  return {
    invoke: (a, b) => {
      if (revoked === false) {
        return binf(a, b);
      }
    },
    revoke: () => {
      revoked = true;
    }
  };
};

/*const rev = revocable(require('./funcs').add);
const add_rev = rev.invoke;

console.log(add_rev(1, 2));
rev.revoke();
console.log(add_rev(4, 5));*/

module.exports = revocable;
