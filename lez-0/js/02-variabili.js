/* -------------------------------------------------------------------------- */
/*                                  VARIABILI                                 */
/* -------------------------------------------------------------------------- */

// Una variabile è un riferimento denominato a un valore. Serve ad accedere a un valore imprevedibile tramite un nome predeterminato

var myLastName;
myLastName = 'Spandre';

console.log(myLastName);

myLastName = 'Rossi';

console.log(myLastName);

/* --------------------- 3 modi per dichiarare variabili -------------------- */

// Dichiara una variabile utilizzabile in tutto il programma. 
var myName = 'Milo';

// Dichiara una variabile in un ambito specifico. La parola chiave let non permette di dichiarare due volte la stessa variabile
let tipoCorso = 'Angular';

// Dichiara una variabile locale per un ambito specifico che però non può essere cambiata.
const PI = 3.14;

var a = 7;
var b = 2;

b = a;

var c = 5;
var d = 10;
var e = 'Ciao';

console.log(c, d, e);

c = a + 1;
d = b + 5;
e = e + ' e benvenuto!';

console.log(c, d, e);