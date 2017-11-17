function* producerFn() {
    for (let i=0; i<10; i++) {
        yield i;
    }
}

let producer = producerFn();

for (let i of producer) {
    console.log(i)
}
