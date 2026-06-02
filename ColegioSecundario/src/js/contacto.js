// selectores
const inputName = document.querySelector('#nombre');
const inputSurname = document.querySelector('#apellido');
const inputEmail = document.querySelector('#email');
const inputTextArea = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#btn-enviar');
const formularioMensaje = document.querySelector('#form-mensaje');

// listeners
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    validarCampos();
});


// functions
function validarCampos() {
    limpiarHTML(formularioMensaje);

    if(inputName.value.trim() === '' || inputSurname.value.trim() === '' || inputEmail.value.trim() === '' || inputTextArea.value.trim() === '') {
        formularioMensaje.classList.remove('formularioToggle');
        mostrarAlerta('Verifica los Campos');

        setTimeout(() => {
            formularioMensaje.classList.add('formularioToggle');
        }, 3000);

    } else {
        formularioMensaje.classList.remove('formularioToggle');
        mostrarAlerta('Mensaje Enviado Correctamente');
        formulario.reset();

        setTimeout(() => {
            formularioMensaje.classList.add('formularioToggle');
        }, 3000);
    };
};

function mostrarAlerta(msj) {
    const mensaje = document.createElement('P');

    mensaje.textContent = msj;

    formularioMensaje.appendChild(mensaje);
};

function limpiarHTML(contenedor) {
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    };
};