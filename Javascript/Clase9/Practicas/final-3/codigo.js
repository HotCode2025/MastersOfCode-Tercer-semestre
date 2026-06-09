// Garantiza que el código corra después de cargado el DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura el formulario dentro del documento
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (evento) => {
        // Frena la recarga automática predeterminada de la página
        evento.preventDefault();

        // Obtiene las cadenas de texto ingresadas eliminando espacios vacíos en los extremos
        const username = formulario.querySelector('input[type="text"]').value.trim();
        const password = formulario.querySelector('input[type="password"]').value.trim();

        // Control de campos vacíos
        if (username === "" || password === "") {
            alert("Por favor, rellena todos los campos.");
            return;
        }

        // Simulación de control de accesos básico
        if (username === "admin" && password === "1234") {
            alert(`¡Bienvenido, ${username}!`);
        } else {
            alert("Usuario o contraseña incorrectos. (Podés probar con 'admin' y '1234')");
        }
    });
});