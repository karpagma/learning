def my_method(*args):
    return sum(args)

result = my_method(5, 6)
print(result)

def what(*args, **kwargs):
    print(args)
    print(kwargs)

what(1, 2, name='Jose', location='UK')
