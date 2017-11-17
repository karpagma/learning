from random import randint

def main():
    technologies = ['.NET Core', 'Python', 'Golang', 'Node.js']
    rand = randint(0, len(technologies)-1)
    print(technologies[rand])

if __name__ == '__main__':
    main()
