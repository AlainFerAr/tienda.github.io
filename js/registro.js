window.onload = () => {
    let registro = document.getElementById("registro");
    registro.addEventListener("click", () => validar());
}

function validar() {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let email = document.getElementById("email");    
    let contraseña = document.getElementById("contrasenia");
    let error = false;
    let patron = /^[a-zA-Z]/
    if (nombre.value.trim() == "" || !patron.test(nombre.value)) {
        error = true;
        nombre.insertAdjacentHTML("afterend", "<span class='error' style='color: red'>NO PUEDE SER VACIO NI EMPEZAR POR NUMERO</span>");
    }

    if (apellidos.value.trim() == "" || !patron.test(apellidos.value)) {
        error = true;
        apellidos.insertAdjacentHTML("afterend", "<span class='error' style='color: red'>NO PUEDE SER VACIO NI EMPEZAR POR NUMERO</span>");
    }

    if (email.value.trim() == "") {
        error = true;
        correo.insertAdjacentHTML("afterend", "<span class='error' style='color: red'>NO PUEDE SER VACIO</span>");
    }

    if (contraseña.value.trim() == "") {
        error = true;
        contraseña.insertAdjacentHTML("afterend", "<span class='error' style='color: red'>NO PUEDE SER VACIO</span>");
    }

    if (error == false) {
        let usuario = {
            "nombre": nombre.value,
            "apellidos": apellidos.value,
            "email": email.value,
            "contraseña": contraseña.value
        }

        let listaUsuarios = [];
        if (localStorage.getItem("usuarios")) listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        listaUsuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
        alert("Usuario registrado");
        window.location.href = "/html/inicioSesion.html";
    }
}