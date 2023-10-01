/**
* 2C = Two of Clubs 
* 2D = Two of Diamonds 
* 2H = Two of Hearts
* 2S = Two of Spades
 */


(() => {
    'use strict'

    let deck            = [];
    const tipos         = ['C', 'D', 'H', 'S'],
          especiales    = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          btnNuevo   = document.querySelector("#btnNuevo");


    const divCartasJugador     = document.querySelector("#jugador-cartas"),
          divCartasComputadora = document.querySelector("#computadora-cartas"),
          puntosHTML           = document.querySelectorAll("small");


    // Esta función inicializa el juego
    const inicializarJuego = ( numJugadores = 1 ) => {
        deck = crearDeck();
        for ( let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        console.log({ puntosJugadores });
    };

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

        return _.shuffle( deck );

    };


    // Esta función me permite tomar una carta
    const pedirCarta = () => {

        if( deck.length === 0 ){
            throw "No hay más cartas en el deck";
        }

        return deck.pop();

    }


    // Esta función permite obtener el valor de la carta
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);

        return ( valor === "A" )  ? 11 :
            ( isNaN( valor ) ) ? 10 : valor * 1

    };


    const acumularPuntos = () => {

    };

    // Turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        do{
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta( carta );
            puntosHTML[1].innerText = puntosComputadora;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;

            imgCarta.classList.add('carta');

            divCartasComputadora.append( imgCarta );

            if( puntosMinimos > 21) {
                break;
            }

        } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        setTimeout(() => {

            if( puntosMinimos === puntosComputadora ){
                alert("Nadie gana!");
            } else if ( puntosMinimos > 21 ) {
                alert("Computadora gana!");
            } else if ( puntosComputadora > 21 ) {
                alert("Jugador gana!");
            } else {
                alert("Computadora gana!");
            }

        }, 200);
    
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
            btnDetener.disabled = true;
            btnPedir.disabled   = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {

            console.warn("21!");
            btnDetener.disabled = true;
            btnPedir.disabled   = true;
            turnoComputadora( puntosJugador );

        } 

    });


    btnDetener.addEventListener('click', () => {

        btnDetener.disabled = true;
        btnPedir.disabled   = true;

        turnoComputadora( puntosJugador );

    });


    btnNuevo.addEventListener('click', () => {

        // deck = crearDeck();
        inicializarJuego(1);

        console.clear();

        btnDetener.disabled = false;
        btnPedir.disabled   = false;

        puntosJugador     = 0;
        puntosComputadora = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML     = '';

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

    });


})();

