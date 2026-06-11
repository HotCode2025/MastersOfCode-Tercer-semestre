# Respuestas de los Quiz

## 13/05/2026

* Respuestas

1. Analiza el siguiente bloque de código:
```
saludo = "Hola"
profesor = "Profe"
alert(saludo + profesor)
```
a- Nos da como resultado el mensaje de: HolaProfe. <br/>
b- Porque en nuestro código nunca especificamos que deberíamos insertar un espacio entre la suma <br/>
(concatenación) de ambas variables. La forma de resolverlo sería agregar el espacio manualmente.<br/>
alert(saludos +" "+ profesor) <br/>



2. Analiza el siguiente bloque de código:

```
a = 10
b = 20
alert("La suma de 10 + 20 es: " + a + b)
```
Nos da como resultado el mensaje: La suma de 10 + 20 es: 1020. <br/>
¿Por qué ocurre esto? ¿Cómo arreglarías el código para obtener el resultado correcto?<br/>

a- a. Porque primero estamos concatenando un texto (String) con un número y esta operación<br/>
nos da como resultado otro texto con el número al final. Luego repetimos esta operación con el<br/>
siguiente número y obtenemos el texto con los números al final.<br/>
Para obtener el resultado correcto, debemos encapsular la suma de números entre paréntesis y <br/>
luego sí concatenar este resultado con el texto del mensaje.<br/>

a = 10<br/>
b = 20<br/>
alert("La suma de 10 + 20 es: " + (a + b))<br/>

3. ¿Qué hace el siguiente bloque de código?
```
Math.random()
```
* respuesta:

a. Devuelve un número aleatorio entre 0 y 1 <br/>




## 20/05/2026
* Respuestas
1. Analizar la siguiente fórmula para obtener un número aleatorio en un rango del 1 al 3 y elige cuál es correcta:
* La opción d es la correcta.
```
let max = 3

let min = 1

function aleatorio(min, max){

    return Math.floor(Math.random() * (max - min +1) + min)

}
```
 
2. Cuál es un código que se pueda utilizar para un botón Reiniciar en html:

 * La opción a es la correcta: <a href="JavaScript:document.location.reload();">Reiniciar</a> 
 
 
3. Elige cuál es el uso correcto del utf-8 en html:
* La opción e es la correcta. Todas las respuestas

## 27/05/2026
* Respuestas

1. Selecciona cuál de las opciones es una etiqueta estática que NO cambia en HTML:

   * Respuesta correcta: a

2. ¿Qué debemos recordar cuando creamos un botón en HTML para asociarlo en JS a la hora de utilizar este botón? 

   * Respuesta correcta: c. El id que ponemos en HTML, para luego en Js utilizar el mismo nombre

3. ¿Dónde debemos ubicar el script que referencia el archivo Js? 

   * Respuesta correcta: e. La respuesta No esta en las opciones: La mejor práctica moderna es poner el <script> al final del .


## 03/06/2026
* Respuestas

1. ¿Cuál es el significado de la palabra checked? 
     
   * Respuesta: d. Su significado es seleccionado

2. En el juego de La leyenda de Aang: El Avatar ¿Para que utilizamos la función de de innerHTML?

   * Respuesta: d. La utilizamos en Js para mostrar un String

3. ¿Esta recomendado dentro de las buenas prácticas introducir document.getElementById('katara').checked dentro de una estructura if else y que sea la condición que gatille una elección?

   * Respuesta:d. Como buenas prácticas se recomienda crear variables a las que se le asigne este código y que NO vayan a ningún condicional de esta forma.


## 10/06/2026 10-A
* Respuestas

1. ¿Cuántas veces se puede utilizar la función de nuestro juego aleatorio()?
   * c. Se puede utilizar siempre, las veces necesarias.

2. Cuando necesitamos probar nuestro código, ¿Cómo podemos ir viendo o haciendo prueba error?
   * b. Dentro de las buenas prácticas utilizar el Quokka en VSC

3. Las variables creadas en las funciones tienen la capacidad de ser utilizadas en todo el código libremente:
   * b. De ninguna manera, esto es una locura, ya que las únicas variables que pueden hacer esto son las globales.

## 10/06/2026 10-B
* Respuestas

1. ¿Qué es más aconsejable, factorizar o crear desde cero?
   * a. Se aconseja que se factorice lo más que se pueda.

2. ¿Qué significa para ti deployar?
   * a. Mover código para una buena ejecución.

3. ¿Qué representa para ti una variable global?
   * b. Estas variables son las únicas variables que pueden ser utilizadas en cada parte del código, sin limitaciones.