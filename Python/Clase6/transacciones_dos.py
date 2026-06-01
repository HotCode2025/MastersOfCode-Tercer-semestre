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
   #conexion.autocommit = False
   cursos = conexion.cursor()
   sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
   valores = ('Maria', 'Esparza', 'mesparza@mail.com')
   cursos.execute(sentencia, valores)

   sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
   valores = ('Juan', 'Juarez', 'jjuarez@mail.com', 1)
   cursor.execute(sentencia, valores)


   conexion.commit() #commit manualmente
   print('Termina la transaccion')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
