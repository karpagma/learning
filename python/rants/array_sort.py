from random import randint
from itertools import repeat

def main():
    draws_required = int(input('enter the number of draws -> '))
    highest_possible = int(input('enter highest number you can draw -> '))

    numbers = list(range(1, highest_possible+1))
    result = []
    for _ in repeat(None, draws_required):
        draw = randint(0, len(numbers) - 1)
        result.append(numbers[draw])
        numbers[draw] = numbers[-1]
        numbers = numbers[0:-1]

    result = sorted(result)

    print(result)

if __name__ == '__main__':
    main()
