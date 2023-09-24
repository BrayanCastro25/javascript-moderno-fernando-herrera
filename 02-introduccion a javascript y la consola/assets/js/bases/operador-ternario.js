/* 
* Días de semana abrimos a las 11,
* pero los fines de semana abrimos a las 9 
*/

// Entra en un sitio web, para consultar si esta abierto hoy...

const dia = 1;
const horaActual = 9;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las X.

// if( dia === 0 || dia === 6 ) {
//     console.log( "Fin de semana" );
//     horaApertura = 9;
// } else {
//     console.log( "Día de semana" );
//     horaApertura = 11;
// }

horaApertura = ( [0, 6].includes( dia ) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura ) ? "Esta abierto" : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;


console.log( {horaApertura, mensaje} );


