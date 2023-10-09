class Cliente {
    constructor(dni, nombre, apellidos, nick, puntos, email, contrasenia, foto) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nick = nick;
        this.puntos = puntos;
        this.email = email;
        this.contrasenia = contrasenia;
        this.foto = foto;
    }

    //Métodos
    cambiarEmail(nuevoEmail){
        this.email = nuevoEmail;
    }

    cambiarFoto(nuevaFoto){
        this.foto = nuevaFoto;
    }
}


