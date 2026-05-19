function resolverNReinas(N) {
  const soluciones = []; // Guarda todas las combinaciones encontradas
  const tablero = [];    // Arreglo unidimensional: índice = fila, valor = columna

  /**
    Verificamos si es seguro colocar una reina en la posición (fila, col).
    Evalúamos conflictos en columnas y en ambas diagonales.
   **/
  function esSeguro(fila, col) {
    for (let i = 0; i < fila; i++) {
      if (
        tablero[i] === col ||                 // Conflicto en la misma columna
        tablero[i] - i === col - fila ||     // Conflicto en diagonal principal (\)
        tablero[i] + i === col + fila        // Conflicto en diagonal secundaria (/)
      ) {
        return false; // Posición inválida o bajo ataque
      }
    }
    return true; // La posición es segura
  }


  function backtrack(fila = 0) {
    // Caso base: Si llegamos a la fila N, significa que colocamos con éxito las N reinas
    if (fila === N) {
      soluciones.push([...tablero]); // Guardamos una copia del estado actual del tablero
      return;
    }

    // Evaluamos cada columna de la fila actual
    for (let col = 0; col < N; col++) {
      if (esSeguro(fila, col)) {
        tablero[fila] = col; // Colocamos la reina
        backtrack(fila + 1); // Pasamos a la siguiente fila
        
      }
    }
  }

  // Iniciamos la búsqueda recursiva desde la primera fila (0)
  backtrack();
  
  // Retornamos el arreglo con los datos crudos de las soluciones
  return soluciones; 
}

// Recibe las soluciones crudas y las formatea visualmente en la consola.
function imprimirSoluciones(soluciones, N) {
  console.log(`Se encontraron ${soluciones.length} soluciones para N = ${N}:\n`);

  soluciones.forEach((solucion, idx) => {
    console.log(`Solución ${idx + 1}:`);
    console.log("Posiciones (columna por fila):", solucion);

    // visual del tablero
    for (let i = 0; i < N; i++) {
      let filaStr = "";
      for (let j = 0; j < N; j++) {
        // Si el valor en la fila 'i' es igual a la columna 'j', hay una reina (Q)
        filaStr += solucion[i] === j ? " Q " : " . ";
      }
      console.log(filaStr);
    }
    console.log("*****************")
  });
}

//Ejecucion del programa
const N = 8;
const resultados = resolverNReinas(N); // 1. Calculamos y obtenemos los datos
imprimirSoluciones(resultados, N);     // 2. Mostramos los datos de forma bonita