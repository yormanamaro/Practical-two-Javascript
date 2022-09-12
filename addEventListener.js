alert("Hello World");

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

btn.addEventListener(`click`, btnOnclick);

function btnOnclick() {
    const sumaImputs = input1.value + input2.value; // aqui estamos trayendo los valores de input 1 y 2 pero en string
    pResult.innerText = 'Resultado de esa union es: ' + sumaImputs; // usando innerhtml mostramos el resultado en documento
}; 