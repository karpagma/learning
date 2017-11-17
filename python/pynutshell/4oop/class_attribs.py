class C4:
    x = 9

    def doit(self):
        C4.x += 1

def main():
    c1 = C4()
    c2 = C4()

    c1.doit()
    c2.doit()

    print(C4.x)

if __name__ == '__main__':
    main()
