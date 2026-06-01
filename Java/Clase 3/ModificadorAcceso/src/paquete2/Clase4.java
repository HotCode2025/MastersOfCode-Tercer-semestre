
package paquete2;

public class Clase4 {
   private String atributoPivate = "atributo Privado";
   
   private Clase4(){
       System.out.println("Constructor privado");
       
   }
   // Creamos un constructor public paara poder crear objetivos
   public Clase4(String argumento){ //Aquí se puede llamar al constructor vacio
       this();
       System.out.println("Constructor publico");
   }
   
   
   //Método pprivate
   private void metodoPrivado(){
       System.out.println("Metodo privado");
   }

    public String getAtributoPivate() {
        return atributoPivate;
    }

    public void setAtributoPivate(String atributoPivate) {
        this.atributoPivate = atributoPivate;
    }
   
}
