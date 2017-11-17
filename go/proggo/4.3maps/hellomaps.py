
AGES = {}
AGES['Madhan'] = 41
AGES['Shaashvat'] = 4
AGES['Shrishti'] = 13
AGES['Swarna'] = 39

#print(sorted(AGES, key=len))

for n in sorted(AGES, key=len):
    print(n, AGES[n])
