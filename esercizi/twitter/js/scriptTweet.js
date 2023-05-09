/* ---------------- indirizzo del db che contiene gli utenti ---------------- */
const URL_USERS = 'http://localhost:3000/users';

// Recupero l'utente creato in registrazione dal local storage e, se esiste, il tweet inviato prima del caricamento della pagina
var localUser = JSON.parse(localStorage.getItem('log'));
var localPrevTweet = JSON.parse(localStorage.getItem('prevTweet'));

// Visualizzo i dati dell'utente corrente
var currentUser = document.querySelector('#currentUser');
currentUser.innerHTML = `<div class="d-flex align-items-center">
                            <img class="avatar" src="${localUser.avatar}">
                            <p class="mb-0">@${localUser.username}</p>
                        </div>`;

/* -------------------- Recupero i vari elementi del form ------------------- */
var tweet = document.querySelector('#tweet');
var carCheck = document.querySelector('#carCheck');
var tweetCheck = document.querySelector('#tweetCheck');

var prevTweet = document.querySelector('#prevTweet');

var tweetForm = document.querySelector('#tweetForm');
tweetForm.addEventListener('submit', addTweet);

var logoutForm = document.querySelector('#logoutForm');
logoutForm.addEventListener('submit', logout);

/* ---- Al caricamento della pagina mostra il tweet precedente, se esiste --- */
stampaTweet();

function stampaTweet() {
    prevTweet.textContent = '';
    if (localPrevTweet != null) {
        prevTweet.innerHTML = `[${localPrevTweet.orarioTweet}] @${localUser.username} <br> ${localPrevTweet.tweet}`;
    } else {
        prevTweet.textContent = 'Scrivi il tuo tweet nella casella qui sopra e postalo qui!';
    }
}

// Faccio in modo che l'utente non possa scrivere più di 50 caratteri
function contaCaratteri() {
    var testoInserito = tweet.value;
    // Creo un counter per la lunghezza del tweet
    var counter = (50 - testoInserito.length);
    carCheck.textContent = counter;
}

tweet.addEventListener('keyup', contaCaratteri);

/* ------------------------ Indica l'orario corrente ------------------------ */
function getTime() {
    var now = new Date();
    var ora = (now.getHours() < 10 ? '0' : '') + now.getHours();
    var min = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    var orario = `${ora}:${min}`;
    return orario;
}

/* --------- Creo la funzione costruttore per creare l'oggetto Tweet --------- */
function Tweet(tweet, orarioTweet) {
    this.tweet = tweet;
    this.orarioTweet = orarioTweet;
}

// Controllo che il tweet non superi la lunghezza consentita e lo aggiungo ai tweet dell'utente corrente salvato in local storage
function addTweet() {
    if (tweet.value.length > 50) {
        tweetCheck.textContent = 'Il tuo tweet è troppo lungo!';
        event.preventDefault();
    } else if (tweet.value.length == 0 || tweet.value == ' ') {
        tweetCheck.textContent = 'Devi scrivere qualcosa per poterlo twittare!';
        event.preventDefault();
    } else {
        var newTweet = new Tweet(tweet.value, getTime());
        localUser.tweets.push(newTweet);
        localStorage.setItem('log', JSON.stringify(localUser));
        // Salvo anche il tweet stesso nel local storage per potervi accedere più facilmente nella funzione stampaTweet()
        localStorage.setItem('prevTweet', JSON.stringify(newTweet));
    }
}

// Quando l'utente esegue il logout, salvo i suoi dati e tweet nel db per poi cancellarli dal local storage
function logout() {
    fetch(URL_USERS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: localStorage.getItem('log')
    })
    localStorage.removeItem('log');
    localStorage.removeItem('prevTweet');
}