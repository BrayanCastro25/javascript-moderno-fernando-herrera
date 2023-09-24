let a = 5;

if( a >= 10 ) {
    // Si se cumple se ejecuta esto
    console.log("A es mayor o igual a 10");
} else {
    // Si no se cumple se ejecuta esto
    console.log("A es menor a 10");
}

console.log("Fin de programa");

let edad = 10;

if( edad == "10" ){
    console.log("Mismo valor sin importar el tipo de dato");
}

if( edad === "10" ){
    console.log("Mismo valor y tipo de dato");
}

if( edad === 10 ){
    console.log("Mismo valor y tipo de dato (*)");
}

// Laboratorio días de la semana

let day = 5;

// Mediante objetos se puede evitar utilizar muchos condicionales
const week = {
    0: "Sunday - 0",
    1: "Monday - 1",
    2: "Tuesday - 2",
    3: "Wednesday - 3",
    4: "Thursday - 4",
    5: "Friday - 5",
    6: "Saturday - 6",
}

console.log( week[day] || "Día no definido" );

// Otra opción es mediante arreglos
const week2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log( week2[day] || "Día no definido" );

