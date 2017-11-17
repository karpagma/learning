class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        return this.items.shift()
    }

    size() {
        return this.items.length
    }
}

let queue = new Queue()
queue.enqueue(100)
queue.enqueue(99)

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.size())