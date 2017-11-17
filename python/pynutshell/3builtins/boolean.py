def count_trues(seq):
    return sum(bool(x) for x in seq)

nums = [1, 2, 3, 0, 5, 0]
print(count_trues(nums))

print(len([x for x in nums if x]))
