def is_leap(year):
    leap = False
    
    # Write your logic here
    if (year % 400 == 0):
        leap = True
    elif (year % 100 == 0):
        leap = False
    elif (year % 4 == 0):
        leap = True
    else:
        leap = False
    return leap

def main():
    leaps = [2000, 2400]
    results = [is_leap(x) for x in leaps]
    if False in results:
        print('failed')
        exit(1)

    leaps = [1800, 2000, 1900, 2100, 2200, 2300, 2500]
    results = [is_leap(x) for x in leaps]
    print(results)
    for x in leaps:
        if is_leap(x):
            print('failed')
            exit(1)
    #if True in results:
        #print('falied')
    
    print('success')

if __name__ == '__main__':
    main()