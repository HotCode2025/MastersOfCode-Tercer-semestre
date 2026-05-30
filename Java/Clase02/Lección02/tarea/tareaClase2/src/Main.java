
//Remplazo de un bloque static
class Servidor {
    static int maxJugadores = configurarSlots();

    private static int configurarSlots() {
        return 128; // Define el límite de jugadores
    }
}

//Remplazo del bloque no static
class Personaje {
    int dineroInicial;

    public Personaje() {
        dineroInicial = 5000; // Todos arrancan con este monto
    }
}

public class Main{
    public static void main(String[] args) {
        //Visualizamos el reemplazo del bloque static
        System.out.println("**Configuración del Servidor**");
        System.out.println("Máximo de jugadores: " + Servidor.maxJugadores);

        System.out.println(); // dejamos un espacio en blanco para dar un salto

        // Visualizar el reemplazo del bloque no static
        // Creamos un objeto para que se ejecute el constructor
        Personaje p1 = new Personaje();
        System.out.println("**Datos del Personaje**");
        System.out.println("Dinero inicial: $" + p1.dineroInicial);
    }
}
