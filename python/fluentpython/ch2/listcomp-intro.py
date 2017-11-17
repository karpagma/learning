symbols = 'apple'
codes = [ord(s) for s in symbols if ord(s) > 100]
print(codes)

codes1 = list(filter(lambda c: c > 100, map(ord, symbols)))
print(codes1)

c1 = filter(lambda c: c > 100, map(ord, symbols))
print(c1)

for c in c1:
    print(c)

print(type(codes1))
print(type(c1))
