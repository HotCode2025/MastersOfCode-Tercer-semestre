function torresDeHanoi(n, origen, destino, auxiliar) {
    if (n === 0) return 0; 

    // Guardamos los movimientos de las llamadas recursivas
    const movimientosPrevios = torresDeHanoi(n - 1, origen, auxiliar, destino);
    
    console.log(`Mover disco ${n} de ${origen} a ${destino}`);
    
    const movimientosSiguientes = torresDeHanoi(n - 1, auxiliar, destino, origen);

    // Retornamos la suma total (previos + el movimiento actual + los siguientes)
    return movimientosPrevios + 1 + movimientosSiguientes;
}
const numDiscos = 3;
console.log(`\nSolución para ${numDiscos} discos:`);

const totalMovimientos = torresDeHanoi(numDiscos, 'A', 'C', 'B');

//Resumen
console.log(`\nEl total de movimientos es: ${totalMovimientos}`);