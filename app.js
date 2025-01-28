//O principal objetivo deste desafio é fortalecer suas habilidades em 
// lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');

function adicionarAmigo(){
    resultado.innerHTML = '';
    let nome = document.getElementById('amigo').value;
    if (nome == ''){
        alert('Digite um nome válido');
        return;
    }
    amigos.push(nome);
    document.getElementById('amigo').value = '';
    exibirListaDeAmigos();
}

function exibirListaDeAmigos(){
    
    listaDeAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaDeAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
    amigos = [];
    listaDeAmigos.innerHTML = '';
}

