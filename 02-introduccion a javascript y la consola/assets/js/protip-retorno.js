
function crearPersona( nombre, apellido ){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona( "Brayan", "Castro" );
console.log( persona );

const argumentos = (...args) => {
    return args;
}

const [ edad, saludo, vivo, apellido ] = argumentos(10, "Hola", true, "Castro");

console.log({ edad, saludo, vivo, apellido });


const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
};


let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
};


imprimePropiedades( personaje );
