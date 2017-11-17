function bar(x, y, z) {
    foo(x);
    return [y, z];

    function foo(x) {
        y = y * x;
        z = z * x;
    }
}

let [a, ...rest] = bar(2, 3, 4);
console.log(a,rest);
