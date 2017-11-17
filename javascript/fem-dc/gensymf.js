const increamenter = require('./increamenter');

const gensymf = symbol => {
  const inc = increamenter();
  return () => {
    return `${symbol}${inc()}`;
  };
};

const geng = gensymf('G');
const genh = gensymf('H');
console.log(geng());
console.log(genh());
console.log(geng());
console.log(genh());

module.exports = gensymf;
