
class Singleton {

    static instancia;
    nombre = '';

    constructor( nombre = '' ){
        if( !!Singleton.instancia ){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton( 'Ironman' );
console.log(`El nombre de la instancia1 es: ${instancia1.nombre}`);

const instancia2 = new Singleton( 'Spiderman' );
console.log(`El nombre de la instancia2 es: ${ instancia2.nombre }`);