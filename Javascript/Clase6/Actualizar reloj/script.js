function actualizarReloj() {
    // 1. Capturamos la información del sistema
    const ahora = new Date();
    
    // Formatear hora, minutos y segundos a 2 dígitos
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    // Datos de la fecha
    const dia = ahora.getDate();
    const año = ahora.getFullYear();
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                   "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const mesLetras = meses[ahora.getMonth()];

    // 2. Manipulación del DOM: Inyectamos los datos en el HTML
    // Usamos el ID que definimos en el HTML
    document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;
    document.getElementById("fecha").textContent = `${dia} de ${mesLetras} de ${año}`;
}

// 3. Hacer que se ejecute cada 1 segundo (1000ms)
setInterval(actualizarReloj, 1000);

// Ejecutamos una vez al inicio para que no parpadee al cargar
actualizarReloj();