menu = """
Bienvenidos al conversor de monedas 

1- Colones
2- Pesos argentinos
3- Pesos colombianos

Eligue una opción: """

option = int(input(menu))

if option == 1:
    colones = input("¿Cuantos colones tienes?: ")
    colones = float(colones)
    valor_dolar = 625
    dolares = colones / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dólares")
elif option == 2:
    colones = input("¿Cuantos pesos argentinos tienes?: ")
    colones = float(colones)
    valor_dolar = 65
    dolares = colones / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dólares")
elif option == 3:
    colones = input("¿Cuantos pesos colmbianos tienes?: ")
    colones = float(colones)
    valor_dolar = 3875
    dolares = colones / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dólares")
else:
    print('Ingresa una opción correcta por favor')

