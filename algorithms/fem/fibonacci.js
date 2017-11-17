function fibonacci(n) {
    if (n<=2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

const n = process.argv[2];
for (let i=1; i<=n ; i++) {
    console.log(`Fib(${i}) is ${fibonacci(i)}`);
}
