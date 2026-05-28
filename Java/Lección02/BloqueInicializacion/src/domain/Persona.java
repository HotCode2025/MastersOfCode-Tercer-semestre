package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    static{ //Bloque de inicialaizacion estatico
        System.out.println("Ejecucion de bloque estatico");
        ++Persona.contadorPersonas;
        //idPersona=10;No es estático un atributo, por esto tenemos error
    }
    
    { //Bloque de inicialaizacion NO estatico (CONTEXTO DINÁMICO)
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersonas++; //Incrementamos el atributo
    }
    
    //Los bloques de inicialización se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Ejecución del constructor");
    }
    
    public int getidPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
}
