var listaProductos = [];
var listaCompra = [];
var listaFiltrada = [];
var contador = 0;

onload = () => {
    if (!localStorage.getItem("listaProductos")){
        cargarProductos();
        localStorage.setItem("listaProductos",JSON.stringify(listaProductos));
    } else {
        listaProductos=JSON.parse(localStorage.getItem("listaProductos"));
    }

    pintarContadorCarrito();
    mostrarProductos(listaProductos);
}


function cargarProductos() {
    listaProductos.push(new Producto("1", "Catan", "40", "catan.jpeg", "JuegosMesa"));
    listaProductos.push(new Producto("2", "Caja de pinturas", "35", "caja_pinturas.jpg", "hobby"));
    listaProductos.push(new Producto("3", "Caja de inicio X-wing", "45", "xwing.jpg", "miniaturas"));
    listaProductos.push(new Producto("4", "Aerógrafo Evolution", "60", "evolution.jpg", "hobby"));
    listaProductos.push(new Producto("5", "Trivial", "40", "trivial.jpg", "JuegosMesa"));
    listaProductos.push(new Producto("6", "Times-up", "25", "times.jpg", "JuegosMesa"));
    listaProductos.push(new Producto("7", "Caja de inicio warhammer 40k", "80", "w40k.jpg", "miniaturas"));
    listaProductos.push(new Producto("8", "Caja de inicio Age of Sigmar", "80", "age.jpg", "miniaturas"));
    listaProductos.push(new Producto("9", "Munchkin", "30", "munchkin.jpg", "JuegosMesa"));
    listaProductos.push(new Producto("10", "Zombies!!!", "35", "zombie.jpg", "JuegosMesa"));
    listaProductos.push(new Producto("11", "Compresor Aerógrafo", "80", "compresor.webp", "hobby"));
    listaProductos.push(new Producto("12", "Herramientas", "30", "herramientas.jpg", "hobby"));
}

function mostrarProductos(lista) {
    let divCentral = document.getElementById("central");
    divCentral.innerHTML =""; 
    lista.forEach((producto) => {
        divCentral.innerHTML += `
        <div class="col mb-5">
              <div class="card h-100">
                  <img class="card-img-top" src="/img/${producto.imagen}"/>
                  <div class="card-body p-4">
                      <div class="text-center">
                          <h5 class="nombre">${producto.nombre}</h5>
                          <p class="precio">${producto.precio}€</p>
                      </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center" id="btnanadir"><a class="btn btn-outline-dark mt-auto" href="javascript:mostrarSeleccion(${producto.id})">Añadir a la cesta</a></div>
                  </div>
              </div>
          </div>`;
    });
}

function ordenarNombre() {
    listaProductos.sort((a,b) => {
        if (a.nombre > b.nombre) return 1
        else return -1
    });
    mostrarProductos(listaProductos);
}

function ordenarPrecio() {
    listaProductos.sort((a,b) => {
        if (a.precio > b.precio) return 1
        else return -1
    });
    mostrarProductos(listaProductos);
}

function mostrarCategoria(tipoJuego) {
    listaFiltrada = listaProductos.filter(producto => producto.categoria == tipoJuego);
    mostrarProductos(listaFiltrada);
}

function filtrar() {
    let texto = document.getElementById("filtro").value.trim().toLowerCase();
    listaFiltrada = listaProductos.filter((dato)=>dato.nombre.toLowerCase().includes(texto));
    mostrarProductos(listaFiltrada);
}

function mostrarSeleccion(id) {
    listaFiltrada = listaProductos.filter(producto => producto.id == id);
    mostrarProductos(listaFiltrada);
    let divAnadir = document.getElementById("btnanadir");
    divAnadir.innerHTML =`
                <form>
                    <div class="form-group">
                        <label for="cantidad">Cantidad</label>
                        <select class="form-control" id="cantidad">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <br>
                    <button class="btn btn-dark" onclick="anadirACesta()">Añadir a la cesta</button>
                </form>
    `; 
}

function anadirACesta() {
    if (localStorage.getItem("listaCompra")) listaCompra = JSON.parse(localStorage.getItem("listaCompra"));
    let compra = listaFiltrada[0];
    let cantidad = document.getElementById("cantidad").value;
    contador = contador + parseInt(cantidad);
    listaCompra.push({
        "id": compra.id,
        "nombre": compra.nombre,
        "imagen": compra.imagen,
        "precio": compra.precio,
        "cantidad": cantidad,
    })
    localStorage.setItem("listaCompra",JSON.stringify(listaCompra));
    pintarContadorCarrito();
}
function pintarContadorCarrito(){

    if (localStorage.getItem("listaCompra")) {
        let listaCompra = JSON.parse(localStorage.getItem("listaCompra"));
        listaCompra.forEach((compra) => {
            contador += parseInt(compra.cantidad);
        })       
    }
    let spanCarrito = document.getElementById("spanCarrito");
    spanCarrito.innerText=contador;
}