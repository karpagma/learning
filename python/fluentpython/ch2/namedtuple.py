# pylint: disable=R,C

from collections import namedtuple

City = namedtuple('City', 'name country population coordinates')

tokyo = City('Tokyo', 'JP', 36.933, (35.689722, 139.6916687))
print(tokyo.name)