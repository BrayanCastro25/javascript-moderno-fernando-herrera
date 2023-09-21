
const regresaTrue = () => {
    console.log( "Regresa True" );
    return true;
}

const regresaFalse = () => {
    console.log( "Regresa False" );
    return false;
}

console.log( "AND" );
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.log( "OR" );
console.log( regresaTrue() || regresaFalse() );
console.log( regresaFalse() || regresaTrue() );

console.warn("Asignación con Operadores");
console.log( regresaFalse() || "No soy verdadero" );
console.log( regresaTrue() || "No soy verdadero" );