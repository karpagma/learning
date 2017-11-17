def make_adder(augend):
    def add(addend):
        return augend + addend
    return add

f = make_adder(3)
print(f(2))
print(f(5))

def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

c = make_counter()
print(c(), c())
