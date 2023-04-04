/* -------------------------------------------------------------------------- */
/*                                  Stringhe                                  */
/* -------------------------------------------------------------------------- */

// Per assegnare una stringa come valore di una variabile, bisogna scriverla tra apici
var stringa = 'Sono una stringa';

var quote = 'Ieri m\'ha detto solo "Ciao"';
console.log(quote);

// Per concatenare delle stringhe usando l'operatore di concatenazione +
var ourString = 'Io vengo prima. ' + 'Io vengo dopo.';
console.log(ourString);

var stringaConc = 'Io vengo prima. ';
stringaConc += 'Io vengo dopo.';
console.log(stringaConc);

// È possibile calcolare la lunghezza di una stringa utilizzando la proprietà .length
var nomeLength = 0;
var nome = 'Milo';

nomeLength = nome.length;
console.log(nomeLength);

// Siccome le stringhe sono 0-based, possiamo utilizzare la bracket notation come in un array
var primaLetteraNome = nome[0];
console.log(primaLetteraNome);

// Le stringhe possono essere modificate
var hello = 'Jello World';
hello = 'Hello World';

// È possibile trovare l'ultimo carattere di una stringa anche se non se ne conosce la lunghezza esatta
var ultimaLetteraNome = nome[nome.length - 1]; // -1 perché si parte a contare da 0
console.log(ultimaLetteraNome);

/* ----------------------------- Metodi strighe ----------------------------- */

var txt = 'Oggi ho svolto 8 ore di lezione';

// METODI PER RICERCA
var search1 = txt.indexOf('lezione'); // Restituisce l'indice in cui la parola inizia
console.log(search1);

var search2 = txt.lastIndexOf('e'); // Restituisce indice ultima occorrenza. Per la prima occorrenza: indexOf()
console.log(search2);

var search3 = txt.charAt(3); // Restituisce il carattere in quella posizione
console.log(search3);

// METODI PER IL TAGLIO
var testo = 'Sono le 13 e tutto va bene';

// I metodi slice() e substring() estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale
var sl = testo.slice(4, 10);
console.log(sl);

var subs = testo.substring(4, 10);
console.log(subs);

// METODI PER SOSTITUZIONE
var affermazione = 'Il miglior browser al mondo è Internet Explorer';

// Il metodo replace() restituisce una nuova stringa rmpiazzando tutte le ricorrenze del pattern dato con una sostituzione
var sostituzione = affermazione.replace('Internet Explorer', 'Google Chrome');
console.log(sostituzione);

var upp = affermazione.toUpperCase();
console.log(upp);

var low = affermazione.toLowerCase();
console.log(low);

// METODI DA STRING A ARRAY
var string1 = 'Ciao mi chiamo Milo';

/*
    Il metodo split() divide una stringa in una lista ordinata di sotto-stringhe. Le raggruppa in un array e restituisce l'array. La divisione avviene cercando un pattern fornito come parametro tra le parentesi e indica dove il metodo deve andare a separare.
*/
// Fornendo come pattern una stringa vuota, il metodo va a separare ogni singolo carattere, spazi compresi
var arr1 = string1.split('');
console.log(arr1);

// Fornendo come pattern uno spazio, il metodo va a separare ogni ogni volta che trova uno spazio nella stringa
var arr2 = string1.split(' ');
console.log(arr2);

// Se invece si parte con un array di stringhe, con il metodo join() è possibile ottenere una stringa che concatena tutti gli elementi separati da virgole oppure dal carattere specificato come parametro del metodo
var arr3 = ['M', 'i', 'l', 'o'];
var string3 = arr3.join('');
console.log(string3);

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
// Data una stringa, stamparla in console al contrario
var stringaEs = 'I topi non avevano nipoti';

var stringaInv = stringaEs.split('').reverse().join('');

console.log(stringaInv);