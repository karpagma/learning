def updown(n):
    for x in range(1, n):
        yield x
    for x in range(n, 0, -1):
        yield x

print(list(updown(3)))
