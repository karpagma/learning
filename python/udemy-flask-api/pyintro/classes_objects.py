class LotteryPlayer:
    def __init__(self):
        self.name = 'Rolf'
        self.numbers = (5, 9, 12, 3, 1, 21)

    def total(self):
        return sum(self.numbers)

player = LotteryPlayer()
#print(player.total())

class Student:
    def __init__(self, name, school, marks):
        self.name = name
        self.school = school
        self.marks = marks

    def avg(self):
        return sum(self.marks) / len(self.marks)

    @staticmethod
    def go_to_school():
        return 'I\'m going to school.'

anna = Student('Anna', 'MIT', [80, 85, 100, 90, 60])
print(anna.go_to_school())

rolf = Student('Rolf', 'Oxford', [80, 78, 90, 87, 70])
print(Student.go_to_school())
