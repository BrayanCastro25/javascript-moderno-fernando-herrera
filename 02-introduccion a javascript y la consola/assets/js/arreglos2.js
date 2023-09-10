let games = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
// console.log('Largo:', games.length);
console.log({ length: games.length, games });

// first   = games[0];
// last    = games[ games.length - 1 ];

// console.log({first, last});

// games.forEach( (game, index, arr) => {
//     console.log(game, index, arr);
// });

// const newLenght = games.push( 'F-Zero' );
// console.log({ newLenght, games });

const newLenght = games.unshift( 'Dong King Kong' );
console.log({ newLenght, games });
