let listar = document.getElementById('listar');

document.addEventListener('DOMContentLoaded', listarData)

let boton = document.getElementById('btnDesc');

function capturaDesc() {
    let desc = document.querySelector('#inputDesc').value;
    guardarLocalStorage(desc);
}

function guardarLocalStorage(desc) {

    localStorage.setItem('Descuento', desc);
    listarData();
}

boton.addEventListener('click', capturaDesc)

function listarData() {

    let cant = localStorage.getItem('Cantidad');

    let desc = localStorage.getItem('Descuento');

    let total = 0;

    cant = cant * 800000;

    desc = (desc * cant) / 100;

    total = cant - desc;

    listar.innerHTML = `
    <table>
      <tr>
        <th>Total a pagar</th>
      </tr>
      <tr>
         <td>$${cant}</td>
      </tr>
      <tr>
        <th>Total a pagar</th>
      </tr>
      <tr>
         <td>$${total}</td>
      </tr>
     </table>
    `;
}