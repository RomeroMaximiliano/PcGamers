document.addEventListener('DOMContentLoaded', function() {
    const email = {
    };

    //Seleccionar elementos de interfaz
    const inputEmail = document.querySelector("#Email");
    const password = document.querySelector("#Contraseña");
    const formulario = document.querySelector("#Cuenta");

    //asignar eventos
    inputEmail.addEventListener('blur', validar);
    password.addEventListener('blur', validar);

    //Funciones
    function validar(e) {
        if (e.target.value.trim() === "") {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        if (e.target.id === 'Email' && !validarEmail(e.target.value)) {
            mostrarAlerta("el email no es válido", e.target.parentElement);
            return;
        }

        limpiarAlerta(e.target.parentElement);

        //asignar valores
        email[e.target.id] = e.target.value.trim().toLowerCase(); // Utiliza e.target.id en lugar de e.target.name

        console.log(email);
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        //Generar Alerta
        const error = document.createElement("p");
        error.textContent = mensaje;
        error.classList.add("alert");

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //comprueba si ya existe una alerta
        const alerta = referencia.querySelector(".alert");
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }
});