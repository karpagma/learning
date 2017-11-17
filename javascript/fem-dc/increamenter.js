const {add} = require('./funcs');
const curry = require('./curry');

const increamenter = () => {
  const fn = curry(add, 1);
  let i = 0;
  return () => {
    const ret = fn(i);
    i += 1;
    return ret;
  };
};

module.exports = increamenter;
