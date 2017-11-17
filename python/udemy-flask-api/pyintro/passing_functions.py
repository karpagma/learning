def methodception(function):
    return function(2, 3)

result = methodception(lambda a, b: a + b)
print(result)

my_list = [13, 75, 76, 88]
list_without_13 = list(filter(lambda x: x != 13, my_list))
print(list_without_13)
