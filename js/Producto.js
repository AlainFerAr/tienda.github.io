class Producto {
    constructor(id, nombre, precio, imagen, categoria) {
        this.id = id ||"SIN_ID";
        this.nombre = nombre || "SIN_NOMBRE";
        this.precio = precio || "SIN_PRECIO";
        this.imagen = imagen;
        this.categoria = categoria || "SIN_CATEGORIA";
    }
}