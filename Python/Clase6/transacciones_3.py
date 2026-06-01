import psycopg2 as bd #Esto es para poder conectranos a ostgre

from prueba_bd import sentencia

conexion = bd.connect(
    user='postgres1',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
           sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
           valores = ('Alex', 'Rojas', 'arojas@mail.com')
           cursor.execute(sentencia, valores)

           sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
           valores = ('Emiliano', 'Suarez', 'esuarez@mail.com', 1)
           cursor.execute(sentencia, valores)

except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
print('Termina la transaccion')