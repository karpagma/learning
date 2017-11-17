class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        item = self.items[0]
        self.items = self.items[1:]
        return item

    def size(self):
        return len(self.items)

def main():
    q = Queue()
    q.enqueue(100)
    q.enqueue(99)

    print(q.size())

    print(q.dequeue())
    print(q.dequeue())

    print(q.size())

if __name__ == '__main__':
    main()
