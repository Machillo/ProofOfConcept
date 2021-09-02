import random

def run():
    random_number = random.randint(1, 100)
    selected_number = int(input('Elige un número del 1 al 100: '))
    while selected_number != random_number:
        if selected_number < random_number:
            print('Busca un número más grande')
        else:
            print('Busca un número más pequeño')
        selected_number = int(input('Elige otro número: '))
    print('¡Ganaste!')

if __name__ == '__main__':
    run()