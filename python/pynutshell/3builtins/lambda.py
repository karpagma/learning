nums = range(10)

even_nums = filter(lambda x: not x%2, nums)
print(even_nums)

even_nums = nums[::2]
print(even_nums)
