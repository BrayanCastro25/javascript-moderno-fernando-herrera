
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = ( element ) => {

    console.log( import.meta.dev );

    const html = `
        DEV: ${ import.meta.env.DEV } </br>
        PROD: ${ import.meta.env.PROD } </br>
        KEY: ${ import.meta.env.VITE_API_KEY} </br>
        BASE: ${ import.meta.env.VITE_BASE_URL} </br>
        
    `;
    element.innerHTML = html;

}