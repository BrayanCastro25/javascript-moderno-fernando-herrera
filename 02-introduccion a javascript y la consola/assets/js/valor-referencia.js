
let a = 10;
let b = a;
a = 30;

console.log({a, b});

let juan = { nombre: "Juan" };
let ana  = { ...juan };
ana.nombre = "Ana";

console.log({ juan, ana });


// Con el operador spread ... y las llaves en el argumento de la función se puede romper la referencia entre los objetos
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = "Tony";
    return persona;
};

let peter = { nombre: "Peter" };
let tony  = cambiaNombre( peter );

console.log({ peter, tony });

// Arreglos
const frutas        = ["Mango", "Manzana", "Pera"];

// El método time del objeto console permite iniciar el temporizador
console.time("slice");
// El método slice permite separar los elementos de un array y romper la referencia
const otrasFrutas   = frutas.slice();
// El método timeEnd del objeto console permite detener el temporizador
console.timeEnd("slice");

// El método time del objeto console permite iniciar el temporizador
console.time("spread");
// El operador spread permite romper la referencia entre los arreglos
const otrasFrutas2   = [ ...frutas ];
// El método timeEnd del objeto console permite detener el temporizador
console.timeEnd("spread");

otrasFrutas.push("Piña"); 

console.table({ frutas, otrasFrutas });

