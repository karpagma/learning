def produce():
    for k in range(10):
        yield k

if __name__ == '__main__':
    for i in produce():
        print(i)
