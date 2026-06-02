const spanPersonajeJugador = document.getElementById('personaje-seleccionado');
const spanPersonajeComputadora = document.getElementById('personaje-computadora');
const botonPersonajeJugador = document.getElementById('boton-personaje');
const inputPersonajes = document.getElementsByName('personaje');

const seleccionarPersonajeComputadora = () => {
  const personajes = ["🔥Zuko🔥", "💧Katara💧", "🌪️Aang 🌪️", "🌱Toph🌱"];
  const indiceAleatorio = Math.floor(Math.random() * personajes.length);
  spanPersonajeComputadora.innerText = `La computadora ha seleccionado a ${personajes[indiceAleatorio]}`;
};

function seleccionarPersonajeJugador(personaje) {
  console.log(personaje);

  spanPersonajeJugador.innerText = personaje 
    ? `Has seleccionado a ${personaje}` 
    : `Debes seleccionar a un personaje`;

  if (personaje) seleccionarPersonajeComputadora();
}

botonPersonajeJugador.addEventListener('click', () => {
  const inputSeleccionado = [...inputPersonajes].find(input => input.checked);
  const personaje = inputSeleccionado 
    ? document.querySelector(`label[for="${inputSeleccionado.id}"]`)?.innerText 
    : null;

  seleccionarPersonajeJugador(personaje);
});