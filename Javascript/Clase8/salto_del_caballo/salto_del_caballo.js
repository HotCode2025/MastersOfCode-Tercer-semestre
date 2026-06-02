// Usamos spread operator y map para crear la matriz de forma más concisa
const crearTablero = (n) => 
  [...Array(n)].map(() => Array(n).fill(-1));

const imprimirTablero = (tablero) => {
  const n = tablero.length;
  const tope = n * n - 1;
  // Generamos el encabezado usando map y join en lugar de un bucle for tradicional
  const encabezadoCol = [...Array(n).keys()]
    .map(col => col.toString().padStart(3, " "))
    .join(" ");
    
  console.log(`      ${encabezadoCol} `);
  console.log(`    ${"-".repeat(n * 4)}`);
  // Iteramos sobre las filas usando forEach
  tablero.forEach((fila, i) => {
    // Procesamos cada celda de la fila con map
    const filaStr = fila.map(valor => {
      if (valor === -1) return "  - ";
      if (valor === 0) return "  C ";
      if (valor === tope) return "  F ";
      return valor.toString().padStart(3, " ") + " ";
    }).join("");

    console.log(`${i.toString().padStart(2, "    ")} | ${filaStr}`);
  });
  console.log("");
};

const obtenerMovimientosValidos = (n, x, y, tablero) => {
  // Agrupamos los desplazamientos en pares [dx, dy] para mayor claridad
  const desplazamientos = [
    [2, 1], [1, 2], [-1, 2], [-2, 1], 
    [-2, -1], [-1, -2], [1, -2], [2, -1]
  ];
  // Calculamos las nuevas posiciones y filtramos las válidas de una sola vez
  return desplazamientos
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(([nx, ny]) => 
      nx >= 0 && ny >= 0 && nx < n && ny < n && tablero[nx][ny] === -1
    );
};

const recorridoCaballo = (n, inicioX, inicioY) => {
  const tablero = crearTablero(n);
  tablero[inicioX][inicioY] = 0;
  
  let retrocesos = 0;
  const totalMovimientos = n * n;

  //Función recursiva para el backtracking
  const resolver = (x, y, pasoActual) => {
    // Condición de corte: recorrió las n x n casillas
    if (pasoActual === totalMovimientos) return true;

    const opciones = obtenerMovimientosValidos(n, x, y, tablero);

    for (const [nx, ny] of opciones) {
      tablero[nx][ny] = pasoActual;
      if (resolver(nx, ny, pasoActual + 1)) return true;
      //Vuelta Atrás (borra la anotación y retrocede)
      tablero[nx][ny] = -1;
      retrocesos++;
    }
    
    return false;
  };

  return resolver(inicioX, inicioY, 1) 
    ? { tablero, totalSaltos: totalMovimientos - 1, retrocesos } 
    : null;
};

//Ejecución Principal
const n = 8; // Tablero de ajedrez
const inicioX = 0; 
const inicioY = 0; 

const tableroParaMostrar = crearTablero(n);
tableroParaMostrar[inicioX][inicioY] = 0;

console.log(`🏁 Posición inicial del caballo (${inicioX}, ${inicioY}):`);
imprimirTablero(tableroParaMostrar);

const resultado = recorridoCaballo(n, inicioX, inicioY);

if (resultado) {
  console.log("🐎 Recorrido del caballo 🐎");
  imprimirTablero(resultado.tablero);
  console.log(`🐎Saltos realizados:🐎 ${resultado.totalSaltos}`);
  console.log(`◀️ Retrocesos (Vuelta atrás): ${resultado.retrocesos}`);
} else {
  console.log("🤦 Solución no encontrada 🤦");
}