/* -------------------------------------------------------------------------- */
/*                                  Operatori                                 */
/* -------------------------------------------------------------------------- */

/*
    Le espressioni si basano su elementi chiamati operatori, che ci permettono di creare un unico valore a partire da uno o più valori:
    - Operatori di assegnamento     =
    - Operatori aritmetici          + - * / ++ -- %
    - Operatori per stringhe        +
    - Operatori di confronto        < <= > >= == !=
    - Operatori logici              && || ! (and, or, not)
*/

var somma = 10 + 5;
var sottrazione = 10 - 5;
var moltiplicazione = 10 * 5;
var divisione = 10 / 5;

console.log("somma = " + somma + " sottrazione = " + sottrazione + " moltiplicazione = " + moltiplicazione + " divisione = " + divisione);

var incrOne = 89;
incrOne++;
console.log(incrOne);

var resto = 11 % 3; // Il 3 sta tre volte nell'11, 3+3+3 = 9. 2
console.log(resto);