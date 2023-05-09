/* --------------------- Recupero gli elementi del form --------------------- */
var username = document.querySelector('#username');
var userCheck = document.querySelector('#userCheck');

var password = document.querySelector('#password');
var passwordCheck = document.querySelector('#passwordCheck');

var registraForm = document.querySelector('#registraForm');

/* -------------------- Controlli per username e password ------------------- */
const FORMATO_USER = /^[a-zA-Z0-9]{4,15}$/;
const FORMATO_PW = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;

function checkUser() {
    if (username.value.length < 4) {
        userCheck.textContent = 'Il tuo username deve contenere almeno 4 caratteri!';
        return false;
    } else if (username.value.length > 15) {
        userCheck.textContent = 'Il tuo username deve contenere meno di 15 caratteri!';
        return false;
    } else if (!username.value.match(FORMATO_USER)) {
        userCheck.textContent = 'Il tuo username può contenere soltanto lettere e numeri!';
        return false;
    } else {
        userCheck.textContent = '';
        return true;
    }
}

function checkPass() {
    if (password.value.length < 8 || !password.value.match(FORMATO_PW)) {
        passwordCheck.innerHTML = `<li>La tua password deve contenere:</li>
                                    <li>Almeno 8 caratteri</li>
                                    <li>Almeno una maiuscola</li>
                                    <li>Almeno una minuscola</li>
                                    <li>Almeno un numero</li>
                                    <li>Almeno un carattere speciale</li>`;
        return false;
    } else {
        passwordCheck.textContent = '';
        return true;
    }
}

/* ------------ Creo la funzione costruttore per l'oggetto utente ----------- */
function User(username, password) {
    this.username = username;
    this.password = password;
}

function addUser() {
    var userOk = checkUser();
    var passwordOk = checkPass();

    if (userOk && passwordOk) {
        var newUser = new User(username.value, password.value);
        newUser.avatar = 'https://pbs.twimg.com/profile_images/1143032401108578305/8IYSjofV_400x400.jpg';

        newUser.tweets = [];
        localStorage.setItem('log', JSON.stringify(newUser));
    } else {
        event.preventDefault();
    }
}

registraForm.addEventListener('submit', addUser);