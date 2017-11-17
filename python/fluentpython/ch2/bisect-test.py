import bisect

haystack = [1, 4, 5, 6, 8, 12, 15, 20, 21, 23, 23, 26, 29, 30]
needles = [0, 1, 2, 5, 8, 10, 22, 23, 29, 30, 31]
row_fmt = '{0:2d} @ {1:2d}    {2}{0:2d}'

def demo():
    for needle in reversed(needles):
        position = bisect.bisect(haystack, needle)
        offset = position * '  |'
        print(row_fmt.format(needle, position, offset))


if __name__ == '__main__':
    print('haystack ->', ' '.join('%2d' % n for n in haystack))
    demo()
