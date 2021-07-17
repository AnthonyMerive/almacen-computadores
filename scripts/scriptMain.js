let listar = document.getElementById('listar');

let boton = document.getElementById('btnDesc');

boton.addEventListener('click', capturaDesc)

document.addEventListener('DOMContentLoaded', listarData)

let form = document.getElementById('form');

form.addEventListener('submit',formSubmit)

function formSubmit(e){
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

    cant = cant * 800000;

    descTotal = (descIni * cant) / 100;

    total = cant - descTotal;

    listar.innerHTML = `
    <table>
      <tr>
        <th>Total a pagar</th>
      </tr>
      <tr>
         <td>$${cant}</td>
      </tr>
      <tr>
        <th>Total a pagar con un descuento del ${descIni}%</th>
      </tr>
      <tr>
         <td>$${total}</td>
      </tr>
      <tr>
        <th>Ahorro <br>$${descTotal}</th>
      </tr>
     </table>
    `;
}