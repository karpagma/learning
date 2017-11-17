class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def size(self):
        return len(self.items)

def main():
    stack = Stack()
    stack.push(9)
    stack.push(10)

    print(stack.pop())
    print(stack.pop())
    print(stack.size())

if __name__ == '__main__':
    main()
