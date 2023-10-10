
/**
 * Esta función pide una carta del Deck
 * @param {Array<string>} deck 
 * @returns {String} Retorna la última carta del Deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}