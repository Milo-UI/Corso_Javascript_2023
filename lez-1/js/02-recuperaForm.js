var elDemo = document.getElementById('demo');

function saluta() {
    var nome = document.getElementById('nome').value;

    if (nome == '' || nome == ' ') {
        elDemo.innerHTML = 'Non hai compilato il campo';
        elDemo.style = 'color: red';
    } else {
        elDemo.innerHTML = 'Ciao ' + nome + '!';
        elDemo.style = 'color: #ebebeb';
    }
}