//Definir variables
const numeroFactura = document.getElementById('valor-factura');
const calcular = document.getElementById('calcular');
const ingresarFactura = document.getElementById('ingresar-factura');
const reiniciar = document.getElementById('reiniciar');


// const valorTotal = document.getElementById('valor-total');


//Definir event listeners
calcular.addEventListener('click', calcularFactura);
ingresarFactura.addEventListener('click', ingresarDatosFactura);
reiniciar.addEventListener('click', reiniciarFormulario);

function calcularFactura() {
    const valorNeto = document.getElementById('valor-neto').value;  
    let resultadoIva = parseInt(valorNeto) * 0.19;
    let resultadoTotal = parseInt(valorNeto) + parseInt(resultadoIva);
    document.getElementById('iva').value = parseInt(resultadoIva);
    document.getElementById('valor-total').value = resultadoTotal;
    
}

function ingresarDatosFactura(){
    console.log('Ingreso de datos funciona');
}

function reiniciarFormulario(){
    console.log('Reinicio del formulario funciona');
}