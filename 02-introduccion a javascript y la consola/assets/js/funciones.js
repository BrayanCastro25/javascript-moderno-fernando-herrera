function saludar( nombre ) {
    console.log( arguments );
    console.log("Hola " + nombre);
}

const saludarAnonimo = function( nombre ) {
    console.log( arguments );
    console.log("Hola " + nombre);
}

const saludarFlecha = ( nombre ) => {
    console.log( arguments );
    console.log("Hola " + nombre);
}


saludar( 'Juan', 40 );
saludarAnonimo( 'Pedro', 32 );
saludarFlecha( 'Luisa', 53 );
