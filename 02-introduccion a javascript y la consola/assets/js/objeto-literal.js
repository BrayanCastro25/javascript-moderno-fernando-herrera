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

delete personaje.edad;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// Con el método Object.freeze
Object.freeze( personaje );

// Esta propiedad evita que se modifiquen o se creen propiedades
personaje.dinero = 10000000;

// Pero no evita que se modifiquen propiedades de objetos que contenga dicho objeto
personaje.direccion.ubicacion = "Costa Rica";
console.log( personaje );

// Obtener los nombres de las propiedades de un objeto
const propertyNames = Object.getOwnPropertyNames( personaje );
console.log({ propertyNames });
