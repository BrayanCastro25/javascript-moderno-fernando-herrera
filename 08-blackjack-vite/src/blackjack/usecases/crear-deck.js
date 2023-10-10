import _ from 'underscore';

/**
 * Esta función crea un nuevo Deck
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @returns {Array<String>} Regresa un nuevo Deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposDeCarta es obligatoria como un arreglo de string');

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposEspeciales es obligatoria como un arreglo de string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );

    return deck;
}