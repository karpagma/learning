from functools import wraps

def my_decorator(func):
    @wraps(func)
    def function_that_runs_func(*args, **kwargs):
        print('I am in the decorator')
        func(*args, **kwargs)
        print('After the decorator')
    return function_that_runs_func

@my_decorator
def my_function(name):
    print('I am the function with param {}'.format(name))

my_function('madhan')

def decorator_with_arguments(number):
    def my_decorator(func):
        @wraps(func)
        def function_that_runs_func():
            print('In the decorator')
            if number == 56:
                print('Not running the function')
            else:
                func()
            print('After the decorator!')
        return function_that_runs_func
    return my_decorator

@decorator_with_arguments(56)
def my_function2():
    print('In function2')

#my_function2()
