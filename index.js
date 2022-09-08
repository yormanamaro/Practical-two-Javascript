+ngreseconst h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log(input.value); // elemento que nos permite ver que escribe el usuario

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = 'Esto es un ejemplo de modificar un h1 con JS <br> Otro ejemplo de modificacion de htm en js';


//  PARA UBICAR CLASES ASIGNADAS A ETIQUETAS

console.log(h1.getAttribute('verde'));
h1.setAttribute('verde', 'rojo');


h1.classList.add('naranja'); // Para agregar clases desde JS
h1.classList.remove('rojo'); // Para remover clases desde JS

input.value = "Ingrese su Email"; // Para agregar un mensaje al input





