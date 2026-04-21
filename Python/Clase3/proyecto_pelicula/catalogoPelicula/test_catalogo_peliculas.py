#importamos la clase pelicula desde el modulo pelicula dentro
# del paquete catalogoPelicula
from catalogoPelicula.pelicula import Pelicula

# Importamos la clase ServicioPeliculas desde el módulo
# servicio_peliculas dentro del paquete catalogoPelicula
from catalogoPelicula.servicio_peliculas import ServicioPeliculas

#creamos una clase para gestionar la interfaz de usuario del catalogo de peliculas
class TestCatalogoPeliculas:

    def __init__(self):
        self.servicio_peliculas = ServicioPeliculas()

     #Agregamos el metodo mostrar_menu
    def mostrar_menu(self):
        #mostramos el menu interactivo y gestionamos las acciones del usuario
        print('===Bienvenidos al catalogo de peliculas===')
        #Mediante el ciclo while damos a elegir las 4 opciones
        while True:
            try:
            #Escribimos nuestro menu con sus opciones
                print(f'''Opciones:
                1. Agregar Película
                2. Listar Películas
                3. Eliminar catálogo de películas
                4. Salir''')
            #Opcion de seleccion para el usuario
                opcion = int(input('Seleccione una opcion valida (1,2,3 o 4): '))
            #revisamos la opcion que selecciono el usuario
            #mediante un condicional multiple (if-elif-else)
                if opcion == 1:
                    nombre_pelicula = input('Digite el nombre de la pelicula: ')
                    pelicula = Pelicula(nombre_pelicula)
                    self.servicio_peliculas.agregar_pelicula(pelicula)
                elif opcion == 2:
                    self.servicio_peliculas.listar_peliculas()
                elif opcion == 3:
                    self.servicio_peliculas.eliminar_archivo_peliculas()
                elif opcion == 4:
                    print('Hasta Luego...')
                    break
                else:
                    print('error digite un valor disponible (1,2,3 o 4) .')
            #Agregamos el bloque except para procesar las excepciones
            #que seria cuando se proporciona un caracter o un valor invalido
            except ValueError:
                print('Ingrese un numero valido (1,2,3 o 4).')
            except Exception as e:
                print(f'Error: {e}')


if __name__ == '__main__':
    app = TestCatalogoPeliculas()
    app.mostrar_menu()