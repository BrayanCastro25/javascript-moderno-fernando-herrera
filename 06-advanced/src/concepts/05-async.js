import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    console.log('asyncComponent');

    const id1 = '5d86371f1efebc31def272e2';

    findHero( id1 )
        .then( ({name}) => element.innerHTML = name )



}


/**
 * 
 * @param {String} id 
 */
const findHero = async( id ) => {

    const hero = heroes.find(hero => hero.id === id )

    return hero;

}