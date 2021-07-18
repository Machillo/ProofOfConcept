from car import Car
from account import Account

if __name__ == "__main__":
    print("Hola Mundo")

    car = Car("904801", Account("Kenneth Alvarado", "904801"))
    print(vars(car))
    print(vars(car.driver))