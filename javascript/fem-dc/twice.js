const twice = binaryfunc => {
  return function(a) {
    return binaryfunc(a, a);
  };
};

module.export = twice;
