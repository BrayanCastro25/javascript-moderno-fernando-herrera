let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    cords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "10800, 90265",
        ubicacion: "Malibu, California"
    }
};

console.log( "Nombre:", personaje.nombre);
console.log( "Nombre:", personaje["nombre"]);

console.log( "No. Trajes", personaje.trajes.length );
console.log( "Último traje", personaje.trajes[ personaje.trajes.length - 1 ] );
