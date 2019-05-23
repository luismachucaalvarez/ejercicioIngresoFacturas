//Definir variables
const listadoFacturas = document.getElementById('listado-facturas');
const numeroFactura = document.getElementById('valor-factura');
const calcular = document.getElementById('calcular');
const ingresarFactura = document.getElementById('ingresar-factura');
const reiniciar = document.getElementById('reiniciar');


// const valorTotal = document.getElementById('valor-total');


//Se definen los event listeners por cada elemento del formulario
calcular.addEventListener('click', calcularFactura);
ingresarFactura.addEventListener('click', ingresarDatosFactura);
reiniciar.addEventListener('click', reiniciarFormulario);


//Se va a calcular el IVA y el total de la factura a partir del valor neto, y lo mostrará
//en los casilleros correspondientes antes de ingresarlos al Record
function calcularFactura() {
    const valorNeto = document.getElementById('valor-neto').value;  
    let resultadoIva = parseInt(valorNeto) * 0.19;
    let resultadoTotal = parseInt(valorNeto) + parseInt(resultadoIva);
    document.getElementById('iva').value = parseInt(resultadoIva);
    document.getElementById('valor-total').value = resultadoTotal;
    
}

function ingresarDatosFactura(){
    // alert('Ingreso de datos funciona');
    const valorNeto = document.getElementById('valor-neto').value;
    const resultadoIva = document.getElementById('iva').value;
    const resultadoTotal = document.getElementById('valor-total').value;
    botonBorrar = document.createElement('a');
    botonBorrar.classList.add('delete','is-medium');
    // const trNumeroFactura = document.createElement('tr');
    // const th = document.createElement('th');
    // const td = document.createElement('td');
    // // const numero = document.createTextNode('Prueba 1');
    // th.innerText = numeroFactura;
    
    // const neto = document.createTextNode('Prueba 2');
    // const ivaT = document.createTextNode('Prueba 3');
    // th.appendChild(numero);
    // td.appendChild(neto);
    // td.appendChild(ivaT);
    // tr.appendChild(th);
    // tr.appendChild(td);

    // tr.innerHTML = numeroFactura + '</td><td>' + valorNeto + '</td><td>' + resultadoIva + '</td><td>' + resultadoTotal + '</td>';
    tr.appendChild(botonBorrar);
    listadoFacturas.appendChild(tr);
    // const li = document.createElement('li');
    // li.innerText = "Prueba";
    // li.appendChild(botonBorrar);
    // listadoFacturas.appendChild(li);

}

function reiniciarFormulario(){
    alert('Reinicio del formulario funciona');
}


function mostrarTablaFacturas(){
    const valorNeto = document.getElementById('valor-neto').value;
    const resultadoIva = document.getElementById('iva').value;
    const resultadoTotal = document.getElementById('valor-total').value;
}