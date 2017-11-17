class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    size() {
        return this.items.length
    }
}

let stack = new Stack()
stack.push(99)
stack.push(100)

console.log(stack.pop())

console.log(stack.size())