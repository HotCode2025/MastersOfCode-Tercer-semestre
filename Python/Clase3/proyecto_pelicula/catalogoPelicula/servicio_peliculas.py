import os

 #Definimos la clase ServicioPeliculas
class ServicioPeliculas:
   #Definimos el nombre del archivo
    def __init__(self):
        self.nombre_archivo = 'peliculas.txt'
    #Agregamos los metodos agregar_pelicula, listar_peliculas y
    # eliminar_archivo_peliculas.
    def agregar_pelicula(self, pelicula):
        with open(self.nombre_archivo, 'a') as archivo:
            #Mandamos a llamar el metodo write asi podemos escribir info
            # a nuestro archivo
            archivo.write(f'{pelicula.nombre}\n')

    def listar_peliculas(self):
        #aqui abrimos con un bloque with, abrimos nuestro archivo,
        #accedemos al atributo nombre_Archivo y abrimos en modo lectura
        with open(self.nombre_archivo, 'r') as archivo:
            #imprimimos el listado de pelis
            print('***Lista de peliculas***')
            print(archivo.read())

    def eliminar_archivo_peliculas(self):
        #Aqui utilizamos el modulo OS con el metodo remove
        os.remove(self.nombre_archivo)
        print(f'Se elimino el archivo: {self.nombre_archivo}')