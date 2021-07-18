let listar = document.getElementById('listar');

let boton = document.getElementById('btnDesc');

boton.addEventListener('click', capturaDesc)

document.addEventListener('DOMContentLoaded', listarData)

let form = document.getElementById('form1');

form.addEventListener('submit', formSubmit)

function formSubmit(e) {
    e.preventDefault();
}

function capturaDesc() {
    let desc = document.querySelector('#inputDesc').value;
    guardarLocalStorage(desc);
}

function guardarLocalStorage(desc) {

    localStorage.setItem('Descuento', desc);
    listarData();
    
}

function listarData() {

    let cant = localStorage.getItem('Cantidad');

    let descIni = localStorage.getItem('Descuento');

    let total = 0;

    if(descIni === null){
        alert("Los equipos estan valorados en $800.000 c/u, Ingrese su descuento en la pagina tomando en cuenta que el descuento maximo es del 50%");
        return 0;
    }else{


    if(descIni > 50){
        alert("El maximo descuento es del 50%");
        return 0;
    }
    else{

    cant = cant * 800000;

    descTotal = (descIni * cant) / 100;

    total = cant - descTotal;
    }

    listar.innerHTML = `
    <table style="margin: 0 auto;";>
      <tr>
      <th>Total a pagar: <br><br>$${cant}</th>
      </tr>
        <th><br>Total a pagar con el ${descIni}% de descuento: <br><br>$${total}</th>
      <tr>
        <th><br>Su ahorro: <br><br>--> $${descTotal} <--</th>
      </tr>
     </table>
    `;
}
}