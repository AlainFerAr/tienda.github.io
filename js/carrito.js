onload = () => {
    let listaCompra=[];
    if (localStorage.getItem("listaCompra")){
        listaCompra=JSON.parse(localStorage.getItem("listaCompra"));
    }

    mostrarCompra(listaCompra);
}

function mostrarCompra(lista) {
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    let suma = 0;
    let total = 0;
    lista.forEach(compra => {
        suma = parseInt(compra.precio) * parseInt(compra.cantidad);
        total = total + suma;
        cuerpoTabla.innerHTML += `
            <tr>
                <td><img src='/img/${compra.imagen}' width=50></td>
                <td>${compra.nombre}</td>
                <td>${compra.precio}€</td>
                <td>${compra.cantidad}</td>
                <td>${suma}€</td>
            </tr
        `;
    });
    document.getElementById("total").innerText = total;
}

function comprar() {
    alert ("Su compra se ha realizado con éxito!");
    localStorage.removeItem("listaCompra");
    window.location.href = "tienda.html";
}