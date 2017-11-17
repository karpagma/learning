sizes = {'s', 'm', 'l', 'xl'}
print(sizes)

fs = frozenset(sizes)
sizes.add('xxl')

print(fs)
print(sizes)
