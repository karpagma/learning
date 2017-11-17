const fibonnoci = (first = 0, second = 1) => {
  return () => {
    const next = first;
    first = second;
    second = first + next;
    return next;
  };
};

module.exports = fibonnoci;
