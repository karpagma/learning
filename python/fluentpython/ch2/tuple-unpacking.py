
# pylint disable:R,C
import os

def main():
    tuplee = (20, 8)
    ragee = divmod(*tuplee)
    print(ragee)

    path, file_name = os.path.split('/abc/def/xyz')
    print(path)
    print(file_name)

if __name__ == '__main__':
    main()
    