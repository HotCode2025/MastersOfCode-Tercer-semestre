import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        while (true){//ciclo infininto
            System.out.println("******* Aplicación Calculadora *******");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                } // Fin del IF
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break;// Rompe el ciclo y sale
                } else {
                    System.out.println("Opcion erronea: " + operacion);
                }
                // impprimimos un salto de linea antes de repetir el menú
                System.out.println(); // salto de línea de números
            } catch (Exception e){// fin try y comienzo del catch
                System.out.println("ocurrio un error: " + e.getMessage());
                System.out.println();// salto de línea de letras
            }
        }// fin while
    }//Fin main

    private static void mostrarMenu(){
        //Mostramos el menú
        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicación
                4. División
                5. Salir
                """);
        System.out.print("Operación a realizar? ");
    }// fin metodo mostrar menu

    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion) {
            case 1 -> { //suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de laa suma: " + resultado);
            }
            case 2 -> { // resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> { // multiplicación
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
            }
            case 4 -> { // division
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división: " + resultado);
            }
            default -> System.out.println("Opcion es erronea: " + operacion);
        } // Fin switch
    }// fin metodo ejecutar operacion

}// Fin clase
