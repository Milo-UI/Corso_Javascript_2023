/* -------------------------------------------------------------------------- */
/*                                    ARRAY                                   */
/* -------------------------------------------------------------------------- */

/*
    Gli array ci permettono di memorizzare un intere elenco di valori correlati. Sono oggetti 0-based, ovvero a ogni elemento al loro interno viene assegnato un indice a partire da zero.
    Le parentesi quadre indicano l'inizio e la fine dell'array e ogni elemento all'interno è separato da virgola.
    Si possono inserire elementi di qualsiasi tipo (SCONSIGLIATO)
*/
var ourArray = ['Pippo', 8];

// Si può estrarre un singolo elemento utilizzando la bracket notation, andando a richiamare l'indice dell'array
var colori = ['Blu', 'Verde', 'Giallo', 'Viola', 'Rosa'];

console.log(colori);

var primoColore = colori[0];
var secondoColore = colori[1];
var terzoColore = colori[2];

console.log(primoColore);
console.log(secondoColore);
console.log(terzoColore);

/* -------------------------- Cambiare gli elementi ------------------------- */
// Si possono aggiungere elementi ALLA FINE di un array con il metodo push
colori.push('Azzurro', 'Nero');
console.log(colori);

// Se invece si volesse aggiungere un elemento ALL'INIZIO dell' array, si può usare il metodo unshift
colori.unshift('Bianco');
console.log(colori);

/* --------------------------- Rimuovere elementi --------------------------- */
// Si può rimuovere l'ULTIMO elemento dell'array con il metodo pop
colori.pop();
console.log(colori);

// Si può rimuovere il PRIMO elemento dell'array con il metodo shift
colori.shift();
console.log(colori);

/* ---------------------------- Cambiare elementi --------------------------- */
// Oltre che per estrapolare un elemento, si può usaare l'indice per modificare l'array cambiando un elemento
colori[4] = 'Rosso';
console.log(colori);

/* ---------------------------- Ordinare elementi --------------------------- */
// Si possono mettere in ordine gli elementi con il metodo sort
colori.sort();
console.log(colori);

// L'ordine si può invertire
colori.reverse();
console.log(colori);

/* ----------------------------- Lunghezza array ---------------------------- */
// colori.length;
console.log(colori.length);

/* -------------------------------------------------------------------------- */
/*                                  Ciclo for                                 */
/* -------------------------------------------------------------------------- */
/*
    Il ciclo for è uno dei loop più comuni in JavaScript: esegue un blocco di codice per un numero determinato di volte deciso dalla sua condizione. La sintassi prevede:
    - parola chiave for
    - parentesi tonde che contengono la condizione:
        - inizializzazione
        - condizione
        - aggiornamento
    - parentesi graffe che contengono il blocco di codice da eseguire finché la condizione viene rispettata
*/
for (var i = 0; i < 5; i++) {
    console.log(colori[i]);
}

for (var i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Lista della spesa:
    - Creare due array. Il primo contiene la lista dei prodotti da comprare, l'altro i prezzi dei prodotti.
    - Stampare in console il secondo elemento dell'array e il suo prezzo
    - Popolare la lista della spesa (ul) che ha id lista con un list item (li) per ogni prodotto, contenente il nome del prodotto e il suo prezzo
    - Calcolare il totale dei prezzi dei prodotti da comprare e scriverlo nel paragrafo (p) con id totale
*/

var lista = ['Pane', 'Latte', 'Pasta', 'Carne'];
var prezzi = [1.50, 7.50, 5.30, 11.20];

console.log(lista[1] + ' ' + prezzi[1]);

var elLista = document.getElementById('lista');
var elTotale = document.getElementById('totale');

var listaSpesa = '';
var totaleSpesa = 0;

for (let i = 0; i < lista.length; i++) {
    listaSpesa += '<li>' + lista[i] + ' - € ' + prezzi[i] + '</li>';
    totaleSpesa += prezzi[i];
}

elLista.innerHTML = listaSpesa;
elTotale.innerHTML = 'Totale spesa = € ' + totaleSpesa.toFixed(2);