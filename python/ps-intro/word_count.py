file = './sample.txt'
results = dict()
with open(file, 'r') as f:
    for line in f:
        for word in line.split():
            results[word] = results.setdefault(word, 0) + 1

for word, count in sorted(results.items(), reverse=True, key=lambda x: x[1])[:5]:
    print('{} {}'.format(count, word))
