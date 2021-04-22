num1= (int(input("introduce un número: ")))

num2= (int(input("Introduce el segundo número: ")))

def DevuelveMax (n1, n2):
    if n1 < n2:
        print (n2)
    elif n2 < n1:
        print (n1)
    else:
        print ("Son iguales")

print ("El número alto es: ")

DevuelveMax (num1, num2)