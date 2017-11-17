class Product:
    def __init__(self, name, weight):
        self.name = name
        self.weight = weight

    def __repr__(self):
        return '(Name: {}, Weight: {})'.format(self.name, self.weight)

def main():
    door = Product('Wooden Door', 35)
    window = Product('Floor Panel', 25)

    products = [door, window]
    print(products)

if __name__ == '__main__':
    main()
