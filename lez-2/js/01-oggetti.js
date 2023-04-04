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