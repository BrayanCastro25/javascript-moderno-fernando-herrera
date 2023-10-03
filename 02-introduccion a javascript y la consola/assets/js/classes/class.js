
class Persona {

    static _conteo = 0;
    comida = '';

    static get getConteo() {
        return `${ Persona._conteo } instancias`;
    }

    constructor(nombre = "Sin nombre", codigo = "Sin código", frase = "Sin frase") {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo ++;

    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy() {
        console.log( `Soy ${ this.nombre } y mi identidad es ${ this.codigo }` );
    }

    miFrase() {
        console.log( `Soy ${ this.nombre } y mi frase es "${ this.frase }"` );
    }

}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman');

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';

console.log( spiderman );

// console.log( spiderman.getComidaFavorita );

console.log( Persona.getConteo );