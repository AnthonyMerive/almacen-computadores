
let boton = document.getElementById('btnEnviar');


boton.addEventListener('click',capturaDatos)


let form = document.getElementById('form');


//form.addEventListener('submit',formSumbit)

//function formSumbit(e){
  //e.preventDefault();
//}

  function capturaDatos(){
    let cantidad = document.querySelector('#inpuntCantidad').value;

    guardarLocalStorage(cantidad);
  }

  function guardarLocalStorage(cant){

    localStorage.setItem('Cantidad',cant);
    listarData();
  }