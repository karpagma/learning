class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def say(self):
        return 'i am class Car with make and model: {} {}'.format(self.make, self.model)

class Maruti(Car):
    pass

def main():
    print(issubclass(Maruti, Car))

if __name__ == '__main__':
    main()
