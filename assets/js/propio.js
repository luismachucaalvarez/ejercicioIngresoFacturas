//Definir variables
const numeroFactura = document.getElementById('valor-factura');
const valorNeto = document.getElementById('valor-neto');
const iva = document.getElementById('iva');
const valorTotal = document.getElementById('valor-total');


//Definir event listeners

const calcular = document.getElementById('calcular');

calcular.addEventListener('click', pruebaFactura);

function pruebaFactura() {
    console.log('Funciona');
}