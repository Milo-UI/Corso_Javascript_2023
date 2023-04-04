// Commento di una riga
/*
    |
    |
    |
    |
    |
    |
    |
    |
*/
console.log('Hello world!');

// string  indica dei dati di tipo testuale (si scrive sempre tra apici)
// boolean indica un valore vero o falso e accetta solo true/false
// number  indica un valore numerico

var stringa = 'Ciao, benvenuto';
var numero = 8;
var booleano = true;

console.log(typeof stringa);
console.log(typeof numero);
console.log(typeof booleano);

console.log(stringa);

document.write('<h1>' + stringa + '</h1>');

/*
    Chiedere il nome all'utente e stamparlo in un h3
    Calcolare, senza chiederla all'utente, chiedendo solo l'anno di nascita, la sua età con la seguenta formula:
    annoCorrente - annoNascita
    Stampare l'età in un tag <p>
*/

var nomeUtente = prompt('Come ti chiami?');
var annoNascita = prompt('Di che anno sei?');
var annoCorrente = 2023;
// var data = new Date();
// var annoCorrente = data.getFullYear();
var etaUtente = annoCorrente - annoNascita;

document.write('<h3>Benvenuto nel nostro sito ' + nomeUtente + '!</h3>');
document.write("<p>Quest'anno avrai " + etaUtente + " anni.</p>")