def dec1(func):
    def new_func(*args, **kwargs):
        print('dec1 with args:', args, ' and kwargs', kwargs)
        return func(*args, **kwargs)
    return new_func

def dec2(func):
    def new_func(*args, **kwargs):
        print('dec2 with args:', args, ' and kwargs', kwargs)
        result = func(*args, **kwargs)
        return result * result
    return new_func

#@dec2
#@dec1
def add(a, b):
    return a + b

#print(add(2, 3))

f1 = dec2(dec1(add))
f1(2, 3)
