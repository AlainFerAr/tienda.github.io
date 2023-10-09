let listaClientes = [];
let sesionIniciada = false;

onload = () => {
    if (!localStorage.getItem("listaClientes")) {
        cargarClientes();
    } else {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    if (sesionIniciada) {
        document.getElementById("sesion").value = "Alan";
    }
}

function cargarClientes() {
    listaClientes.push(new Cliente("11111111x", "Alain", "Fernandez Arroyo", "Airim", 1000,"afasuizo@gmail.com", "9999"));
    listaClientes.push(new Cliente("22222222x", "Ethan", "Estrada Fernandez", "Lasemitola", 0,"ethanmc100@gmail.com", "8888"));
}

function iniciarSesion() {
    let emailInicio = document.getElementById("email").value.toLoweCase();
    let emailFiltrado = listaClientes.filter((dato) => dato.email.toLoweCase().includes())
    if (nombre = ) {
        
    }
}