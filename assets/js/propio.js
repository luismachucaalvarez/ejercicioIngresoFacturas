//Definir variables
const listadoFacturas = document.getElementById('listado-facturas');
const numeroFactura = document.getElementById('numero-factura');
const calcular = document.getElementById('calcular');
const ingresarFactura = document.getElementById('ingresar-factura');
const reiniciar = document.getElementById('reiniciar');

eventListeners();

//Se definen los event listeners por cada elemento del formulario
function eventListeners() {
    calcular.addEventListener('click', calcularFactura);
    ingresarFactura.addEventListener('click', ingresarDatosFactura);
    reiniciar.addEventListener('click', reiniciarFormulario);
    listadoFacturas.addEventListener('click', borrarDatosFactura);
    document.addEventListener('DOMContentLoaded', cargarTablaFacturas);
}

//Se va a calcular el IVA y el total de la factura a partir del valor neto, y lo mostrará
//en los casilleros correspondientes antes de ingresarlos al Local Storage
function calcularFactura() {
    const valorNeto = document.getElementById('valor-neto').value;
    let resultadoIva = parseInt(valorNeto) * 0.19;
    let resultadoTotal = parseInt(valorNeto) + parseInt(resultadoIva);
    document.getElementById('iva').value = parseInt(resultadoIva);
    document.getElementById('valor-total').value = resultadoTotal;
}


//Se ingresarán los datos de la factura a la tabla correspondiente
function ingresarDatosFactura() {
    const valorNeto = document.getElementById('valor-neto').value;
    const resultadoIva = document.getElementById('iva').value;
    const resultadoTotal = document.getElementById('valor-total').value;

    //Crear boton borrar elemento
    const tdBorrar = document.createElement('td');
    botonBorrar = document.createElement('a');
    botonBorrar.classList.add('delete', 'is-medium');
    tdBorrar.appendChild(botonBorrar);

    //Crear tr para cada factura
    const trFactura = document.createElement('tr');

    //Crear celda Numero Factura
    const thNumeroFactura = document.createElement('th');
    const numeroFactura = document.getElementById('numero-factura').value;
    thNumeroFactura.append(numeroFactura);

    //Se crea celda con información de valor neto por cada factura
    const tdValorNeto = document.createElement('td');
    const valorNetoFactura = valorNeto;
    tdValorNeto.append(valorNetoFactura);

    //Se crea celda con información de IVA por cada factura
    const tdIva = document.createElement('td');
    const resultadoIvaFactura = resultadoIva;
    tdIva.append(resultadoIvaFactura);

    //Se crea celda con información del total por cada factura
    const tdValorTotal = document.createElement('td');
    const resultadoTotalFactura = resultadoTotal;
    tdValorTotal.append(resultadoTotalFactura);

    //Se formatea la información de cada factura para mostrarlo en la tabla
    listadoFacturas.appendChild(trFactura);
    trFactura.appendChild(thNumeroFactura);
    trFactura.appendChild(tdValorNeto);
    trFactura.appendChild(tdIva);
    trFactura.appendChild(tdValorTotal);
    trFactura.appendChild(tdBorrar);

    //Se manda variables de factura a la función para guardar en Local Storage

    guardarDatosFacturaLocalStorage(numeroFactura, valorNetoFactura, resultadoIvaFactura, resultadoTotalFactura);
}

//Función borrará cada factura al hacer clic en el botón borrar

function borrarDatosFactura(e) {
    e.preventDefault();
    if (e.target.className === 'delete is-medium') {
        e.target.parentElement.parentElement.remove();
        borrarFacturaDesdeLocalStorage(e.target.parentElement.parentElement.innerText);
        // console.log(e.target.parentElement.parentElement.innerText);
    }
}

function reiniciarFormulario() {
    alert('Reinicio del formulario funciona');
}


//Esta función guarda los datos en el local storage, así se podrá consultar los datos cada vez que se necesite

function guardarDatosFacturaLocalStorage(numeroFactura, valorNetoFactura, resultadoIvaFactura, resultadoTotalFactura) {
    let numerosFacturas;
    let netoFacturas;
    let ivaFacturas;
    let totalesFacturas;
    numerosFacturas = obtenerNumerosFacturasDesdeLocalStorage();
    netoFacturas = obtenerNetosCadaFacturaDesdeLocalStorage();
    ivaFacturas = obtenerIVACadaFacturaDesdeLocalStorage();
    totalesFacturas = obtenerTotalCadaFacturaDesdeLocalStorage();

    //Se añade cada elemento a su array correspondiente
    numerosFacturas.push(numeroFactura);
    netoFacturas.push(valorNetoFactura);
    ivaFacturas.push(resultadoIvaFactura);
    totalesFacturas.push(resultadoTotalFactura);

    //Se convierte de string a arreglo para Local Storage
    localStorage.setItem('Numero Factura', JSON.stringify(numerosFacturas));
    localStorage.setItem('Valor Neto', JSON.stringify(netoFacturas));
    localStorage.setItem('IVA Factura', JSON.stringify(ivaFacturas));
    localStorage.setItem('Total Factura', JSON.stringify(totalesFacturas));

}

//Esta función comprueba que haya elementos en LocalStorage de números de facturas, retorna un arreglo
function obtenerNumerosFacturasDesdeLocalStorage() {
    let numerosFacturas;
    if (localStorage.getItem('Numero Factura') === null) {
        numerosFacturas = [];
    } else {
        numerosFacturas = JSON.parse(localStorage.getItem('Numero Factura'));
    }
    return numerosFacturas;
}

//Esta función comprueba que haya elementos en LocalStorage de valor neto de cada factura, retorna un arreglo
function obtenerNetosCadaFacturaDesdeLocalStorage() {
    let netoFacturas;
    if (localStorage.getItem('Valor Neto') === null) {
        netoFacturas = [];
    } else {
        netoFacturas = JSON.parse(localStorage.getItem('Valor Neto'));
    }
    return netoFacturas;
}

//Esta función comprueba que haya elementos en LocalStorage del IVA de cada factura, retorna un arreglo
function obtenerIVACadaFacturaDesdeLocalStorage() {
    let ivaFacturas;
    if (localStorage.getItem('IVA Factura') === null) {
        ivaFacturas = [];
    } else {
        ivaFacturas = JSON.parse(localStorage.getItem('IVA Factura'));
    }
    return ivaFacturas;
}

//Esta función comprueba que haya elementos en LocalStorage del total de cada factura, retorna un arreglo
function obtenerTotalCadaFacturaDesdeLocalStorage() {
    let TotalesFacturas;
    if (localStorage.getItem('Total Factura') === null) {
        TotalesFacturas = [];
    } else {
        TotalesFacturas = JSON.parse(localStorage.getItem('Total Factura'));
    }
    return TotalesFacturas;
}

//Esta función carga la tabla con todas las facturas ingresadas, aunque se cierre el navegador
function cargarTablaFacturas() {
    let numerosFacturas;
    let netoFacturas;
    let ivaFacturas;
    let totalesFacturas;
    numerosFacturas = obtenerNumerosFacturasDesdeLocalStorage();
    netoFacturas = obtenerNetosCadaFacturaDesdeLocalStorage();
    ivaFacturas = obtenerIVACadaFacturaDesdeLocalStorage();
    totalesFacturas = obtenerTotalCadaFacturaDesdeLocalStorage();

    //El ciclo for permite extraer los datos de cada factura ingresada
    for (x = 0; x < numerosFacturas.length; x++){

        //Crear boton borrar elemento
        const tdBorrar = document.createElement('td');
        botonBorrar = document.createElement('a');
        botonBorrar.classList.add('delete', 'is-medium');
        tdBorrar.appendChild(botonBorrar);

        //Crear tr para cada factura
        const trFactura = document.createElement('tr');

        // Crear celda Numero Factura
        const thNumeroFactura = document.createElement('th');
        const numeroFactura = numerosFacturas[x];
        thNumeroFactura.append(numeroFactura);

        //Se crea celda con información de valor neto por cada factura
        const tdValorNeto = document.createElement('td');
        const valorNetoFactura = netoFacturas[x];
        tdValorNeto.append(valorNetoFactura);

        //Se crea celda con información de IVA por cada factura
        const tdIva = document.createElement('td');
        const resultadoIvaFactura = ivaFacturas[x];
        tdIva.append(resultadoIvaFactura);

        //Se crea celda con información del total por cada factura
        const tdValorTotal = document.createElement('td');
        resultadoTotalFactura = totalesFacturas[x];
        tdValorTotal.append(resultadoTotalFactura);

        //Se formatea la información de cada factura para mostrarlo en la tabla
        listadoFacturas.appendChild(trFactura);
        trFactura.appendChild(thNumeroFactura);
        trFactura.appendChild(tdValorNeto);
        trFactura.appendChild(tdIva);
        trFactura.appendChild(tdValorTotal);
        trFactura.appendChild(tdBorrar);
    }
}

//Esta función borra los datos de una factura desde local storage
function borrarFacturaDesdeLocalStorage(trFactura){
    let numerosFacturas, numFacturaPorBorrar, numPrueba;
    numFacturaPorBorrar = obtenerNumerosFacturasDesdeLocalStorage();
    valorNetoPorBorrar = obtenerNetosCadaFacturaDesdeLocalStorage();
    ivaPorBorrar = obtenerIVACadaFacturaDesdeLocalStorage();
    valorTotalPorBorrar = obtenerTotalCadaFacturaDesdeLocalStorage();

    // console.log(trFactura);

    numFacturaPorBorrar.forEach(function(e, index){
        console.log(trFactura);
    });
    // console.log(numFacturaPorBorrar[1]);
    // console.log(numFacturaPorBorrar[1]);
    // console.log(valorNetoPorBorrar[1]);
    // console.log(ivaPorBorrar[1]);
    // console.log(valorTotalPorBorrar[1]);
    // for (x = 0; x < numFacturaPorBorrar[x].length; x++){
    //     if (numFacturaPorBorrar[x] === 2){
    //         console.log(valorNetoPorBorrar[x]);
    //     }
    //     // numPrueba = numFacturaPorBorrar[x];
    //     // console.log(numPrueba);
    //     // if (numFacturaPorBorrar[2] === 2){
    //     //     // console.log(numFacturaPorBorrar[x]);
    //     //     numPrueba = numFacturaPorBorrar[x];
    //     //     console.log(numPrueba);
    //     // }
    //     // else{
    //     //     console.log('No funciona');
    //     // }
    // }
    // numFacturaPorBorrar.forEach(function(trFactura, index){
    //     if(numFacturaPorBorrar===trFactura){
    //          console.log('Funciona');
    //      }
    //  });
    // for (x=0; x<)
    // facturaPorBorrar = trFactura.removeClass('delete is-medium');
    // console.log(trFactura);
    // console.log(numerosFacturas);
    // localStorage.setItem('Numero Factura', JSON.stringify(numerosFacturas));
}