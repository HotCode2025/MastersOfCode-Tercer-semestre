package mundopc;


import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); //Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
           Monitor monitorGAMER = new Monitor("GAMER", 13); //Importar la clase
        Teclado tecladoGAMER = new Teclado("Bluetooth", "GAMER");
        Raton ratonGAMER = new Raton("Bluetooth", "GAMER");
        Computadora computadoraGAMER = new Computadora("Computadora GAMER", monitorGAMER, tecladoGAMER, ratonGAMER);
        Orden = orden1 = new Orden();
          Orden = orden2 = new Orden();
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGAMER);
Computadora computadorasVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP);
orden2.agregarComputadora(computadorasVarias);

orden1.mostrarOrden();
orden2.mostrarOrden();
    }
}




