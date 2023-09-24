
const carros = [ 'Ford', 'Mazda', 'Honda', 'Toyota' ];

let j = 0;

// La diferencia entre el while y el do while, es que este último se ejecuta por lo menos una vez
do {
    console.log(carros[j]);
    j++;
} while( carros[j] );

let i = 0;

while ( carros[i] ) {
    if(i === 1) {
        i++;
        continue;
    }
    console.log( carros[i] );
    i++;
}

