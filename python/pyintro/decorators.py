def document_it(func):
    def new_func(*args, **kwargs):
        print('Running function: ', func.__name__)
        print('Positional arguments: ', args)
        print('Keyword arguments: ', kwargs)
        result = func(*args, **kwargs)
        print('Result: ', result)
        return result
    return new_func

def square_it(func):
    def new_func(*args, **kwargs):
        result = func(*args, **kwargs)
        return result * result
    return new_func

@document_it
@square_it
def add(a, b):
    return a + b

add(2, 3)
