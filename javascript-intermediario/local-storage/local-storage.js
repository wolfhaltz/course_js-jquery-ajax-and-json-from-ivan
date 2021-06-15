/*
// setando algo no localStorage
window.localStorage.setItem("nome", "João");

// mostrando o conteúdo
console.log(localStorage['nome']);

// removendo o item e soltando a informação do localStorage
localStorage.removeItem('nome');
console.log(localStorage['nome']);
*/


document.getElementById('enviar-nome').onclick = function(){
    // guardando nome em local storage
    var nome = document.getElementById('nome-usuario').value;
    localStorage.setItem('nome', nome);

    // desaparecendo com o formulário
    document.getElementById('name-field').style.display = 'none';

    // atualizando e mostrando boas-vindas
    document.getElementById('welcome-text').innerHTML = 'Olá ' + nome + "!";
    document.getElementById('not-me').innerHTML = 'Não é ' + nome + "?";
    document.getElementById('welcome-area').style.display = 'initial';
}

if(localStorage.nome){
    // escondemos o formulário
    document.getElementById('name-field').style.display = 'none';
    // atualizamos e mostramos boas-vindas
    document.getElementById('welcome-text').innerHTML = 'Olá ' + localStorage.nome + "!";
    document.getElementById('not-me').innerHTML = 'Não é ' + localStorage.nome + "?";
    document.getElementById('welcome-area').style.display = 'initial';
}

document.getElementById('not-me').onclick = function(){
    // resgatando o nome
    localStorage.removeItem('nome');
    // escondendo o boas-vindas
    document.getElementById('welcome-area').style.display = 'none';
    // mostrando com o formulário
    document.getElementById('name-field').style.display = 'initial';
}