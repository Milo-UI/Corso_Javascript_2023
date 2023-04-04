/* -------------------------------------------------------------------------- */
/*                                if statements                               */
/* -------------------------------------------------------------------------- */

/*
    Un if statement viene usato per prendere decisioni all'interno del codice:
    la parola chiave if dice allo script di eseguire il blocco di codice che si trova tra le graffe se viene rispettata la condizione riportata tra le tonde.
    Se in una funzione si passa un booleano come condizione, la funzione eseguirà il blocco di codice dell'if se true, altrimenti eseguirà ciò che viene dopo
*/

function veroOFalso(eraVero) {
    if (eraVero) {
        return 'Sì, era vero!';
    }
    return 'No, era falso!';
}

console.log(veroOFalso(true));

function testUguale(val) {
    if (val == 12) {
        return 'È uguale!'
    }
    return 'Non è uguale';
}

console.log(testUguale(10));
console.log(testUguale(12));

function testDiverso(val) {
    if (val != 12) {
        return 'È diverso!';
    }
    return 'Non è diverso...'
}

console.log(testDiverso(10));
console.log(testDiverso(12));

function testMaggioreDi(val) {
    if (val >= 100) {
        return 'Maggiore o uguale a 100';
    }
    if (val >= 10) {
        return 'Maggiore o uguale a 10, ma più basso di 100';
    }
    return 'È minore di 10';
}

console.log(testMaggioreDi(200));
console.log(testMaggioreDi(40));
console.log(testMaggioreDi(5));

function testAnd(val) {
    if (val <= 50 && val >= 25) {
        return 'Yes!';
    }
    return 'Nope'
}

console.log(testAnd(30));
console.log(testAnd(10));
console.log(testAnd(60));

function testOr(val) {
    if (val < 10 || val > 20) {
        return 'Il valore si trova al di fuori del range cha va da 10 a 20';
    }
    return 'Il valore si trova nel range cha va da 10 a 20';
}

console.log(testOr(16));
console.log(testOr(34));
console.log(testOr(5));

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
// Scrivi una funzione che determini se un numero è pari o dispari
function pariODispari(num) {
    if (num % 2 == 0) {
        return num + ' è un numero pari';
    }
    return num + ' è un numero dispari';
}

console.log(pariODispari(123456));
console.log(pariODispari(57));

/* ---------------------------- if else statement --------------------------- */

function testIfElse(val) {
    var result = '';

    if (val > 5) {
        result = val + ' è maggiore di 5'
    } else {
        result = val + ' è uguale o minore di 5'
    }

    return result;
}

console.log(testIfElse(3));
console.log(testIfElse(50));

function testElseIf(val) {
    var result = '';

    if (val < 5) {
        result = val + ' è minore di 5'
    } else if (val < 10) {
        result = val + ' è minore di 10'
    } else {
        result = val + ' è maggiore o uguale a 10'
    }

    return result
}

console.log(testElseIf(13));
console.log(testElseIf(8));
console.log(testElseIf(2));

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Scrivi una catena di if/else in modo da soddisfare le seguenti condizioni per la scelta della taglia:

    num >= 20 - return 'XL'
    num < 20 - return 'L'
    num < 15 - return 'M'
    num < 10 - return 'S'
    num < 5 - return 'XS'
*/
function calcolaTaglia(num) {
    var taglia = '';

    if (num < 5) {
        taglia = 'XS';
    } else if (num < 10) {
        taglia = 'S';
    } else if (num < 15) {
        taglia = 'M';
    } else if (num < 20) {
        taglia = 'L';
    } else {
        taglia = 'XL';
    }

    return taglia;
}

console.log('Ti consigliamo di scegliere la taglia ' + calcolaTaglia(18) + ', perché il prodotto veste stretto.');

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/* 
    Determina con una funzione se un triangolo è equilatero, isoscele o scaleno date le misure dei 3 lati.
    Stampa in console:
    'Il triangolo è equilatero' se tutti i lati sono uguali
    'Il triangolo è isoscele' se almeno 2 lati sono uguali
    'Il triangolo è scaleno' se tutti i lati sono diversi
*/

function determinaTipoTri(lato1, lato2, lato3) {
    triangolo = '';

    if (lato1 == lato2 && lato1 == lato3) {
        triangolo = 'equilatero';
    } else if (lato1 == lato2 || lato1 == lato3 || lato2 == lato3) {
        triangolo = 'isoscele';
    } else {
        triangolo = 'scaleno';
    }

    return triangolo;
}

console.log('Il triangolo è ' + determinaTipoTri(3, 3, 3));
console.log('Il triangolo è ' + determinaTipoTri(3, 3, 1));
console.log('Il triangolo è ' + determinaTipoTri(3, 2, 1));