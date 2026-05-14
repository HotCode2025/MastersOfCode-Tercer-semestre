//colocamos funcion para reiniciar
function reiniciar() {
  return location.reload();
}
//Colocamos la funcion para la variable pc dentro de script donde vamos a pasar los argumentos min y max
function eleccionRand(max, min) {
  eleccionPC = Math.floor(Math.random() * (max - min + 1) + min);
  return eleccionPC;
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra";
  } else if (jugada == 2) {
    resultado = "Papel ";
  } else if (jugada == 3) {
    resultado = "Tijera ";
  } else {
    resultado = "Elegiste una opcion invalida";
  }
  return resultado;
}


let jugador = 0;
let triunfos = 0;
let derrotas = 0;
let pc = 0;



while (triunfos < 3 && derrotas < 3) {
  pc = eleccionRand(3, 1);
  jugador = prompt("Elige: 1 Piedra, 2 Papel, 3 Tijera");


 alert("PC Elige: " + eleccion(pc) + "\n Tu eliges: " + eleccion(jugador));
    if (pc == jugador){
        alert("Has empatado!")
    }else if((jugador == 1 && pc ==3) || (jugador == 2 && pc == 1) ||(jugador == 3 && pc ==2) ){
        alert("ganaste!!")
    triunfo ++
    }else{
        alert("perdiste :(")
            perdidas++
            }
        }

alert("Ganaste " + triunfos + " veces. Perdiste " + derrotas + " veces.");