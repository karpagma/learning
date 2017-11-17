# pylint: disable=R,C

symbols = 'apple'
codes = (ord(s) for s in symbols if ord(s) > 100)
for c in codes: 
    print(c)

#codes1 = list(filter(lambda c: c > 100, map(ord, symbols)))

def gets(n):
    print('in gets')
    return str(n)

numbers = [1, 2]
strs = (gets(n) for n in numbers)
print('here')
for s in strs:
    print(s)
