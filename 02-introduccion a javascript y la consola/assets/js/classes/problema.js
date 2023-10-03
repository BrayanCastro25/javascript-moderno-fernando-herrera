
// Declaración de un objeto
function Person (name, age) {
    this.name = name;
    this.age  = age;

    this.imprimir = function() {
        console.log(`Name: ${ this.name } - Edad: ${ this.age }`);
    }
}

// Instanciación de un objeto tipo Person
const maria = new Person('María', 18);

console.log( maria );

// Método imprimir del objeto Person
maria.imprimir();