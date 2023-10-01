/**
* 2C = Two of Clubs 
* 2D = Two of Diamonds 
* 2H = Two of Hearts
* 2S = Two of Spades
 */


const miModulo = (() => {
    'use strict'

    let deck            = [];
    const tipos         = ['C', 'D', 'H', 'S'],
          especiales    = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          btnNuevo   = document.querySelector("#btnNuevo");


    const divCartasJugadores  = document.querySelectorAll(".divCartas"),
          puntosHTML          = document.querySelectorAll("small");


    // Esta función inicializa el juego
    const inicializarJuego = ( numJugadores = 1 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for ( let i = 0; i <= numJugadores; i++) {
            puntosJugadores.push(0);
        }

        console.log({ puntosJugadores });

        btnDetener.disabled = false;
        btnPedir.disabled   = false;

        puntosHTML.forEach( elem => elem.innerText = 0 );
        
        divCartasJugadores.forEach( elem => elem.innerHTML = "" );

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

    // Turno 0: primer jugador y el último es el turno de la computadora
    const acumularPuntos = ( carta, turno ) => {

        puntosJugadores[ turno ] = puntosJugadores[ turno ] + valorCarta( carta );
        puntosHTML[ turno ].innerText = puntosJugadores[ turno ];
        return puntosJugadores[ turno ];

    };


    const crearCarta = ( carta, turno ) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[ turno ].append( imgCarta );

    };


    const determinarGanador = () => {

        // Desestructuración de arreglos
        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {

            const resultado = ( puntosMinimos === puntosComputadora ) ? "Nadie gana!" :
                              ( puntosMinimos > 21 ) ? "Computadora gana!" :
                              ( puntosComputadora > 21 ) ? "Jugador gana!" : "Computadora gana!";
            
            alert( resultado );

        }, 200);
    };


    // Turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do{
            const carta = pedirCarta();
            
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 );
            
            crearCarta( carta, puntosJugadores.length - 1 );

        } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    
        determinarGanador();

    };


    // Eventos
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta();

        let puntosJugador = acumularPuntos( carta, 0 );

        crearCarta( carta, 0 );

        if( puntosJugador > 21 ) {

            btnDetener.disabled = true;
            btnPedir.disabled   = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {

            btnDetener.disabled = true;
            btnPedir.disabled   = true;
            turnoComputadora( puntosJugador );

        } 

    });


    btnDetener.addEventListener('click', () => {

        btnDetener.disabled = true;
        btnPedir.disabled   = true;

        turnoComputadora( puntosJugadores[0] );

    });


    btnNuevo.addEventListener('click', () => {

        inicializarJuego(1);
        
    });

    return {
        nuevoJuego: inicializarJuego
    };
       
})();

