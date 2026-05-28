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

   * Respuesta correcta: e

2. ¿Qué debemos recordar cuando creamos un botón en HTML para asociarlo en JS a la hora de utilizar este botón? 

   * Respuesta correcta: c. El id que ponemos en HTML, para luego en Js utilizar el mismo nombre

3. ¿Dónde debemos ubicar el script que referencia el archivo Js? 

   * Respuesta correcta: e. La respuesta No esta en las opciones: La mejor práctica moderna es poner el <script> al final del .



