class Persona {

    constructor(nombre = "Sin nombre", codigo = "Sin código", frase = "Sin frase") {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

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

// La subclase Heroe se extiende de la clase padre Persona
class Heroe extends Persona {

    constructor(nombre, codigo, frase, clan) {
        // super() hace referencia a la clase que extiende (clase padre)
        // Es necesario llamar primero al constructor del padre super(), antes que al this
        super(nombre, codigo, frase);
        this.clan = clan;
    }

    // Se puede crear un nuevo método con mismo nombre de la clase padre
    quienSoy() {
        console.log(`Soy ${ this.codigo } y pertenezco a ${ this.clan }`);
        // Y es posible reutilizar el mismo método de la clase padre
        super.quienSoy();
    }

}

const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman', 'Los Avengers' );
// const spiderman = new Heroe( );
console.log({ spiderman });

spiderman.quienSoy();
