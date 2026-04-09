from NumerosIgualesException import NumerosIgualesException

resultado = None

try:
    b = int(input('Digite el primer numero: '))
    a = int(input('Digite el segundo numero: '))
    if a == b:
        raise NumerosIgualesException('Son numeros Iguales')

    resultado = a/ b #modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')
else:
    print('No se arrojo ninguna expecion')
finally: #Siempre se va a ejecutar
    print('Ejecucion de este bloque finally')

print(f'El resultado es: {resultado}')
print('seguimos...')
