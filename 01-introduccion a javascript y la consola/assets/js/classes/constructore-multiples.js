
// No es posible tener varios constructores en una clase, pero existe un protip:
class Persona {

    static porObjeto({ nombre, apellido, pais }) {

        // PROTIP: Este método estático, permite obtener los argumentos del objeto 
        // y enviarlos con la firma del constructor para que se cree sin problema.
        return new Persona( nombre, apellido, pais )
    
    }

    constructor( nombre, apellido, pais ){
        
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;

    }

    getInfo() {
        console.log(`Info: ${ this.nombre }, ${this.apellido}, ${ this.pais} `);
    }

}

const nombre1   = "Melissa",
      apellido1 = "Florez",
      pais1     = "Honduras";


// Se crea un objeto 
const david = {
    nombre: "David",
    apellido: "Castro",
    pais: "Colombia",
}


const persona1 = new Persona( nombre1, apellido1, pais1 );
// Para enviar el objeto a la clase Persona, toca crear un método estático
const persona2 = Persona.porObjeto( david );

persona1.getInfo();
persona2.getInfo();