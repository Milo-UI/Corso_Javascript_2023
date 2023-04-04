/* -------------------------------------------------------------------------- */
/*                                  Funzioni                                  */
/* -------------------------------------------------------------------------- */

/*
    Le funzioni ci permettono di scrivere codice riutilizzabile.
    Sono composte da:
    - parola chiave function
    - nome della funzione
    - una lista di parametri/argomenti tra parentesi tonde e separati da virgole
    - il blocco di codice da eseguire contenuto tra parentesi graffe
*/

function saluta() {
    console.log('Ciao');
}

function chiediEta() {
    console.log('Quanti anni hai?');
}

function chiediProfessione() {
    console.log('Che lavoro fai?');
}

function eseguiTutto() {
    saluta();
    chiediEta();
    chiediProfessione();
}

eseguiTutto();

/* ---------------------------------- SCOPE --------------------------------- */
/*
    È possibile dichiarare delle variabili all'interno delle funzioni. Quaste variabili sono accessibili soltanto all'interno della funzione, hanno quindi uno scope locale.
    Quindi lo scope o ambito di visibilità di una variabile è la parte di uno script all'interno del quale si può fare riferimento a essa.
*/

function benvenuto() {
    // variabili locali
    var username = prompt('Come ti chiami?');
    var messaggio = 'Ciao ' + username + ', benvenuto sul sito!';
    var elDemo = document.getElementById('demo');
    elDemo.innerHTML = messaggio;
}

// benvenuto();

// console.log(messaggio);

function scriviFeed() {
    var elFeed = document.getElementById('feed');
    elFeed.innerHTML = '<p>Qui potrai commentare il post</p>';
    elFeed.innerHTML += '<textarea rows="10"></textarea><br>';
    elFeed.innerHTML += '<button onclick="inviaCommento()">Invia commento</button>';
}

function inviaCommento() {
    alert('Grazie per aver inviato il tuo commento!');
}

/* -------------------------------- Parametri ------------------------------- */
// I parametri sono variabili che fungono da segnaposto per i valori che verranno poi assegnati alla funzione quando viene chiamata.
function calcolareArea(altezza, larghezza) {
    var area = altezza * larghezza;
    return area;
}

var areaRett = calcolareArea(4, 5);
console.log("L'area vale: " + areaRett);

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
// Sfruttando la funzione calcolareArea(), crea una funzione che calcoli il volume di un cubo
function calcolaVolume(altezza, larghezza, profondita) {
    // return altezza * larghezza * profondita;
    var area = calcolareArea(altezza, larghezza);
    return area * profondita;
}

console.log('Il volume vale: ' + calcolaVolume(4, 5, 6));