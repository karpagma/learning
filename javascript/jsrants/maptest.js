const names = ['Spark', 'mimics', 'Scala', 'collections'];
const upper = names.map(n => n.toUpperCase());
console.log(upper);

const filter = ['mimics', 'collections'];
const filterNames = names.filter(s => filter.indexOf(s) === -1);
console.log(filterNames);
