function fact(n) {
    if (n<=1) return 1;
    return n * fact(n-1);
}

var n = process.argv[2];
console.log(fact(n));
