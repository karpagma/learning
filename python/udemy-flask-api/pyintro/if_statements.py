def who_do_you_know():
    names_input = input('Enter people you know (with comma separated): ')
    names = [name.strip() for name in names_input.split(',')]
    return names

def ask_user():
    name = input('Enter your name: ')
    return name.strip()

people_i_know = who_do_you_know()
my_name = ask_user()

if my_name in people_i_know:
    print('Your name is in people you know!')
else:
    print('Your name is NOT in people you know!')
