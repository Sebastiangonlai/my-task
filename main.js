import { Notas } from '../modules/notas.js';

var m = [];
function datosPrueba() {
    m.push(new Notas("Recordatorio", "Importante", "Aca va el recordatorio..."));
    m.push(new Notas("Aviso", "Trabajo", "No olvidar llevar al trabajo..."));
    var i;
    for (i = 0; i < m.length; i++) {
        document.getElementById('frmNotas').innerHTML += `
        <div class="toast-alert toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header modal-body">
        <svg class="bd-placeholder-img rounded me-2" width="10" height="10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong class="me-auto">Notas</strong>
        <small>07/08/2023</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="text-card me-sm-2">${m[i].getInfo}</div>
        </div>`;
        console.log("infoNotas: ", m[i]);
    }
}
datosPrueba();
console.log("lengh: ", m.length);

var modificarMascotaN = document.getElementById('btnCrearNota');
modificarMascotaN.addEventListener('click', modificarFuncion);
function modificarFuncion(e) {
    e.preventDefault();
    var titulo = document.getElementById('titulo').value
    var etiqueta = document.getElementById('etiqueta').value
    var nota = document.getElementById('nota').value
    m.push(new Notas(titulo, etiqueta, nota));
    console.log("mlengh2: ", m.length);
    document.getElementById('frmNotas').innerHTML += `
            <div class="toast-alert toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
           <div class="toast-header modal-body">
                <svg class="bd-placeholder-img rounded me-2" width="10" height="10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                </svg>
                <strong class="me-auto">Notas</strong>
                <small>07/08/2022</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="text-card me-sm-2">${m[m.length - 1].getInfo}</div>
        </div>`;
    console.log("infoNotas: ", m[m.length]);
}
