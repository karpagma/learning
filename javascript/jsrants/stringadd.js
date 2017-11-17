Object.prototype.add = s2 => {
    console.log(Object.keys(this));
    return this.valueOf() + ' ' + s2;
}

const greet = 'hello' + 'madhan';

const gr1 = 'hello'.add('madhan');
console.log(gr1);
//console.log(greet);