import sys
import re

WORD_RE = re.compile(r'\w+')

INDEX = {}
with open(sys.argv[1], encoding='utf-8') as fp:
    for linenr, line in enumerate(fp, 1):
        for match in WORD_RE.finditer(line):
            word = match.group()
            columnnr = match.start() + 1
            location = (linenr, columnnr)
            INDEX.setdefault(word, []).append(location)

for word in sorted(INDEX, key=str.upper):
    print(word, INDEX[word])
