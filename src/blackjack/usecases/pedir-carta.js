
/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} baraja arreglo de string
 * @returns {String} retorna una carta
 */
export const pedirCarta = (baraja) => {

    if ( !baraja || baraja.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = baraja.pop();
    return carta;
}