/* -------------------------------------------------------------------------- */
/*                                   Oggetti                                  */
/* -------------------------------------------------------------------------- */
/*
    Un oggetto è un contenitore di valori eterogenei messi insieme a formare una struttura unica che ha un'identità. Viene utilizzato infatti per rappresentare un'entità specifica, per esempio una persona, un ordine, una fattura, una prenotazione ecc. tramite l'aggregazione di dati e funzionalità.

    Un oggetto tipicamente possiede:
    - Dati, ovvero delle proprietà, rappresentate da un nome e un valore
    - Funzionalità, ovvero dei metodi, rappresentati da funzioni
*/

var cane = {
    nome: 'Fido',
    zampe: 4,
    code: 1,
    'colore pelo': 'Nero',
    padroni: ['Marco', 'Chiara', 'Elena']
}
console.log(cane);

// Ci sono due metodi per accedere alle proprietà

// Dot-notation
var nomeCane = cane.nome;
var padroniCane = cane.padroni;
console.log(nomeCane);
console.log(padroniCane);

// Bracket-notation
var colorePeloCane = cane['colore pelo'];
console.log(colorePeloCane);

// una proprietà può assumere qualsiasi valore da un'espressione JavaScript, compreso un altro oggetto, quindi possiamo creare oggetti annidati
var carStorage = {
    car: {
        interno: {
            vanoOggetti: 'libretto',
            sedilePasseggero: 'briciole'
        },
        esterno: {
            bagagliaio: 'ruota di scorta'
        }
    }
}

var contenutoVanoOggetti = carStorage.car.interno.vanoOggetti;
console.log(contenutoVanoOggetti);

// Posso creare un oggetto vuoto e assegnargli in seguito delle proprietà
var persona = {};

persona.nome = 'Milo';
persona.cognome = 'Spandre';
persona.indirizzo = {
    via: 'Via San Mauro',
    numero: 10,
    CAP: '10156',
    citta: 'Torino'
};
persona.eta = 31;

console.log(persona);
console.log(persona.indirizzo.citta);

// I metodi rappresentano attività che l'oggetto può compiere
var studente = {
    nome: 'Aurora',
    cognome: 'Rossi',
    matricola: 123,
    annoNascita: 1999,
    promosso: true,

    presentati: function() {
        // alert('Ciao, sono ' + studente.nome + ' ' + studente.cognome + ', matricola numero ' + studente.matricola);
        alert('Ciao, sono ' + this.nome + ' ' + this.cognome + ', matricola numero ' + this.matricola);
        // La parola chiave this rappresenta l'oggetto a cui appartiene il metodo invocato
    }
}

// studente.presentati();

var elDemo = document.getElementById('demo');

function stampaInfoStudente(oggetto) {
    elDemo.innerHTML = '';
    // elDemo.innerHTML += oggetto.nome + '<br>';
    // elDemo.innerHTML += oggetto.cognome + '<br>';
    // elDemo.innerHTML += oggetto.matricola + '<br>';
    // elDemo.innerHTML += oggetto.annoNascita + '<br>';
    // elDemo.innerHTML += oggetto.promosso;

    for (const prop in oggetto) {
        // console.log(oggetto[prop]);

        if (typeof oggetto[prop] != 'function') {
            elDemo.innerHTML += prop + ': ' + oggetto[prop] + '<br>';
        }
    }
}

stampaInfoStudente(studente);

// È possibile creare un oggetto tramite una funzione costruttore
function person(n, c, e) {
    this.nome = n;
    this.cognome = c;
    this.eta = e;
    this.saluto = function() {
        console.log('Ciao sono ' + this.nome);
    }
}

var amico = new person('Alessandro', 'Taldeitali', 31);
console.log(amico.eta);

amico.saluto();

var amico2 = new person('Leo', ' Talaltri', 29);
amico2.saluto();

person.prototype.dicoEta = function() {
    console.log('Ho ' + this.eta + ' anni.');
}

amico2.dicoEta();

// Un altro metodo per creare un oggetto è quello di utilizzare Object.create partendo da un prototipo, dove Object è un costruttore già presente nella libreria JavaScript
// Prototipo
var auto = {
    tipo: 'benzina',
    display: function() {
        console.log(this.tipo);
    }
}

// Creo l'oggetto
var auto1 = Object.create(auto);
auto1.display();

var auto2 = Object.create(auto);
auto2.tipo = 'diesel';
auto2.display();

// È possibile usare una class per definire una nuova classe che è un metodo per creare oggetti
class docenti {
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    visualizza() {
        return this.nome + ' ' + this.cognome + ' ' + this.eta;
    }
}

var docenteCSS = new docenti('Davide', 'Ghione', 33);

console.log(docenteCSS.visualizza());

// La parola chiave extends consente di sfruttare l'ereditarietà, ovvero la possibilità di estendere una classe genitore attraverso una classe figlia, la quale eredita tutte le caratteristiche della classe genitore

class materie extends docenti {
    constructor(nome, cognome, eta, materia) {
        // super richiama le proprietà ereditate dal genitore, consentendi di fare riferimento alla superclasse
        super(nome, cognome, eta);
        this.materia = materia;
    }
}

var docenteJS = new materie('Milo', 'Spandre', 31, 'JavaScript')
console.log(docenteJS);
console.log(docenteJS.materia);
console.log(docenteJS.visualizza());

/* -------------------------------- Esercizio ------------------------------- */
/*
    Progettare l'oggetto canzoni che contiene delle proprietà: canzone1, canzone2, ecc... Queste proprietà a loro volta sono degli oggetti che hanno altre proprietà: titolo, nomeCantante e anno. Fare inserire all'utente una nuova canzone attraverso un prompt. Visualizzare il nuovo oggetto così costruito.
*/

// var canzoni = {
//     canzone1: {
//         titolo: 'Stairway to Heaven',
//         nomeCantante: 'Led Zeppelin',
//         anno: '1971'
//     },
//     canzone2: {
//         titolo: 'Wish You Were Here',
//         nomeCantante: 'Pink Floyd',
//         anno: '1975'
//     }
// }

// console.log(canzoni);

// var canzoneAggiunta = {
//     canzone3: {
//         titolo: prompt('Inserisci titolo'),
//         nomeCantante: prompt('Inserisci band/artista'),
//         anno: prompt('Inserisci l\'anno')
//     }
// }

// Object.assign(canzoni, canzoneAggiunta);
// console.log(canzoni);
// console.log(canzoni.canzone3);

// ARRAY DI OGGETTI
var canzoni = [
    canzone1 = {
        titolo: 'Stairway to Heaven',
        nomeCantante: 'Led Zeppelin',
        anno: '1971'
    },
    canzone2 = {
        titolo: 'Wish You Were Here',
        nomeCantante: 'Pink Floyd',
        anno: '1975'
    }
];

console.log(canzoni);

canzone3 = {
    titolo: 'Ciao',
    nomeCantante: 'Ciao',
    anno: '2023'
};

canzoni.push(canzone3);
console.log(canzoni);

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/*
    Progettare un array di automobili che contiene alcuni oggetti, con le proprietà marca, modello, colore, alimentazione, anno e cavalli.

    - Visualizzare tutti i dati in console
    - Cancellare da tutte le auto la proprietà cavalli
    - Modificare la proprietà anno solo nelle auto di colore bianco, impostandolo a 2023
*/

var automobili = [{
        marca: 'Fiat',
        modello: '500',
        colore: 'bianco',
        alimentazione: 'benzina',
        anno: 2010,
        cavalli: 67
    },
    {
        marca: 'Fiat',
        modello: 'Multipla',
        colore: 'grigio',
        alimentazione: 'diesel',
        anno: 2012,
        cavalli: 95
    },
    {
        marca: 'Jeep',
        modello: 'Wrangler',
        colore: 'arancione',
        alimentazione: 'diesel',
        anno: 2019
    },
    {
        marca: 'Mazda',
        modello: 'RX7',
        colore: 'rossa',
        alimentazione: 'benzina',
        anno: 2008
    },
    {
        marca: 'Alfred',
        modello: 'Batmobile',
        colore: 'nera',
        alimentazione: 'vegana',
        anno: 1990
    }
];

console.log(automobili);

for (let i = 0; i < automobili.length; i++) {
    delete automobili[i].cavalli;

    if (automobili[i].colore == 'bianco') {
        automobili[i].anno = 2023
    };

    // if (automobili[i].marca == 'Fiat') {
    //     delete automobili[i];
    // }
}

var lunghezza = automobili.length - 1;

for (var i = lunghezza; i >= 0; i--) {
    if (automobili[i].marca == 'Fiat') {
        automobili.splice(automobili[i], 1);
    }
}


console.log(automobili);

// array.splice(indice, q, elemento1, elemento2)

var numeri = [5, 4, 3, 2, 6, 9, 85];

numeri.splice(1, 0, 15, 20)
console.log(numeri);