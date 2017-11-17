def sq(n):
    return n**2

items = [2, 3, 4, 5]
squared = map(sq, items)
print(squared)

sq1 = [i**2 for i in items if i > 3]
print(sq1)
