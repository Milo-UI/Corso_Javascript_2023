/* -------------------------------------------------------------------------- */
/*                              Switch statements                             */
/* -------------------------------------------------------------------------- */
/*
    Al posto di usare else if statements concatenati, si può usare uno switch. Questo testa un valore e può avere diversi casi che eseguono blocchi di codice. case equivale ==.
    Gli switch hanno un'opzione di default che funziona come un else.
*/

/*
    Creiamo uno switch che testa val e setta una risposta per le seguenti condizioni:

    1- alpha
    2- beta
    3- gamma
    4- delta
*/
function alfGreco(val) {
    var risposta = '';

    switch (val) {
        case 1:
            risposta = 'alpha';
            break;
        case 2:
            risposta = 'beta';
            break;
        case 3:
            risposta = 'gamma';
            break;
        case 4:
            risposta = 'delta';
            break;
        default:
            risposta = "Non conosco così tante lettere dell'alfabeto greco";
            break;
    }

    return risposta;
}

console.log(alfGreco(1));

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Scrivere uno switch che stabilisca in che categoria ricade il valore numerico dato:

    da 1 a 3 = 'Low'
    da 4 a 6 = 'Mid'
    da 7 a 9 = 'High'
    > di 9 = 'Il numero è maggiore di 9'
*/
function determinaRange(val) {
    var answer = '';

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid'
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
        default:
            answer = "Il numero è maggiore di 9"
            break;
    }

    return answer;
}

console.log(determinaRange(45));