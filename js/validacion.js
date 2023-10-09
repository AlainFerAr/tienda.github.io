var listaUsuarios = [];

window.onload = () => {
    let inicioSesion = document.getElementById("acceder");
    inicioSesion.addEventListener("click", () => validar());
    cargarUsuarios();
}

function cargarUsuarios() {    
    if(localStorage.getItem("usuarios")){
        listaUsuarios=JSON.parse(localStorage.getItem("usuarios"));
    }
}

function validar() {
    let error = false;
    let email = document.getElementById("email");
    let contrasenia = document.getElementById("contrasenia");
    let patronEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (email.value.trim() == "" || !patronEmail.test(email.value)) {
        error = true;
        email.style.border = "red";
        email.insertAdjacentHTML("afterend","<span class='error'>DEBE SER UN EMAIL VÁLIDO</span>");
    }

    if (contrasenia.value.trim() == "") {
        error = true;
        contrasenia.style.border = "red";
        contrasenia.insertAdjacentHTML("afterend","<span class='error'>DEBE SER UN EMAIL VÁLIDO</span>");
    }

    if (error == false) {
        let posicion = listaUsuarios.findIndex(usuarios=> usuarios.email == email && usuarios.contrasenia == contrasenia);
        if (posicion != -1){
            window.location.href = "/html/index.html";
        } else {
            alert ("Usuario no encontrado");
        }
    }
}