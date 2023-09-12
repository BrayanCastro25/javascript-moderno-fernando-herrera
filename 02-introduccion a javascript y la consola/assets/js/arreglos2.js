let games = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
// console.log('Largo:', games.length);
console.log({ length: games.length });

// first   = games[0];
// last    = games[ games.length - 1 ];

// console.log({first, last});

// games.forEach( (game, index, arr) => {
//     console.log(game, index, arr);
// });

// El método push agrega un elemento al final del array
// const newLenght = games.push( 'F-Zero' );
// console.log({ newLenght, games });

// El método unshift agrega un elemento al inicio del array
// const newLenght = games.unshift( 'Dong King Kong' );
// console.log({ newLenght, games });

// El método pop elimina el último elemento de un array
// const gameTrashed = games.pop();
// console.log({ gameTrashed, games });

// El método splice permite eliminar elementos desde una posición determinada
// El argumento index es la posición desde donde se va eliminar los elementos
// El argumento elements es la cantidad de elementos que se van a eliminar desde la posición index
// let index       = 1;
// let elements    = 2; 

// console.log(games);
// const gamesTrashed = games.splice(index, elements);
// console.log({ gamesTrashed });

console.log(games);
// El método indexOf permite consultar la posición de un elemento en un array
const metroidIndex = games.indexOf("Metroid");
console.log({ metroidIndex });
