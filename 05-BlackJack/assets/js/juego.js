/**
* 2C = Two of Clubs 
* 2D = Two of Diamonds 
* 2H = Two of Hearts
* 2S = Two of Spades
 */

let deck            = [];
const tipos         = ['C', 'D', 'H', 'S'];
const especiales    = ['A', 'J', 'Q', 'K'];

// Esta función crea una nueva baraja
const crearDeck = () => {

    for( let i = 2; i <= 10; i++){
        for( let tipo of tipos ){
            deck.push( i + tipo );
        }
    }

    for( let tipo of tipos ){
        for( let esp of especiales ){
            deck.push( esp + tipo );
        }
    }

    deck = _.shuffle( deck );
    console.log( deck );
    return deck;

};

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {

    if( deck.length === 0 ){
        throw "No hay más cartas en el deck";
    }

    carta = deck.pop();
    console.log( deck );
    console.log( carta );
    return carta;

}

// pedirCarta();

// Esta función permite obtener el valor de la carta
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);

    return ( valor === "A" )  ? 11 :
           ( isNaN( valor ) ) ? 10 : valor * 1

};


const valor = valorCarta( pedirCarta() );
console.log({ valor });
