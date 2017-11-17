from bisect import bisect

def grade(score, breakpoints=[60, 70, 80, 90], gradesa='FDCBA'):
    pos = bisect(breakpoints, score)
    return gradesa[pos]

marks = [33, 99, 77, 70, 89, 90, 100]
grades = [grade(mark) for mark in marks]
print(marks)
print(grades)
