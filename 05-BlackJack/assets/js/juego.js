/**
* 2C = Two of Clubs 
* 2D = Two of Diamonds 
* 2H = Two of Hearts
* 2S = Two of Spades
 */

let deck            = [];
const tipos         = ['C', 'D', 'H', 'S'];
const especiales    = ['A', 'J', 'Q', 'K'];


let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const puntosHTML = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");


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
    return carta;

}

// pedirCarta();

// Esta función permite obtener el valor de la carta
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);

    return ( valor === "A" )  ? 11 :
           ( isNaN( valor ) ) ? 10 : valor * 1

};

// Eventos
btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;

    imgCarta.classList.add('carta');

    divCartasJugador.append( imgCarta );

    if( puntosJugador > 21 ) {
        console.warn("Perdiste!");
        btnPedir.disabled = true;
    } else if ( puntosJugador === 21 ) {
        console.warn("21!");
    } 

});
