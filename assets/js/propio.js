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
    const valorNeto = document.getElementById('valor-neto').value;
    const resultadoIva = document.getElementById('iva').value;
    const resultadoTotal = document.getElementById('valor-total').value;

    //Crear boton borrar elemento
    const tdBorrar=document.createElement('td');
    botonBorrar = document.createElement('a');
    botonBorrar.classList.add('delete','is-medium');
    tdBorrar.appendChild(botonBorrar);

    //Crear tr para cada factura
    const trFactura=document.createElement('tr');

    //Crear celda Numero Factura
    const thNumeroFactura = document.createElement('th');
    const Numero = document.createTextNode('Nro Factura');
    thNumeroFactura.append(Numero);

    //Se crea celda con información de valor neto por cada factura
    const tdValorNeto = document.createElement('td');
    const Numero2 = document.createTextNode('Valor Neto');
    tdValorNeto.append(Numero2);

    //Se crea celda con información de IVA por cada factura
    const tdIva = document.createElement('td');
    const Numero3 = document.createTextNode('IVA');
    tdIva.append(Numero3);

    //Se crea celda con información del total por cada factura
    const tdValorTotal = document.createElement('td');
    const Numero4 = document.createTextNode('Total');
    tdValorTotal.append(Numero4);

    //Se formatea la información de cada factura para mostrarlo en la tabla
    listadoFacturas.appendChild(trFactura);
    trFactura.appendChild(thNumeroFactura);
    trFactura.appendChild(tdValorNeto);
    trFactura.appendChild(tdIva);
    trFactura.appendChild(tdValorTotal);
    trFactura.appendChild(tdBorrar);
}

function reiniciarFormulario(){
    alert('Reinicio del formulario funciona');
}


function mostrarTablaFacturas(){
    const valorNeto = document.getElementById('valor-neto').value;
    const resultadoIva = document.getElementById('iva').value;
    const resultadoTotal = document.getElementById('valor-total').value;
}