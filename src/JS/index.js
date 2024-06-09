const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;

const cartoes = document.querySelectorAll(".cartao");

// PRIMEIRA PARTE

btnAvancar.addEventListener("click", function () {

    if (cartaoAtual === cartoes.length - 1) return;

    escondercartaoselecionado();

    cartaoAtual++;
    console.log(cartaoAtual);
    mostrarcartao();

})

//SEGUNDA PARTE

btnVoltar.addEventListener("click", function () {

    if (cartaoAtual === 0) return;

    escondercartaoselecionado();

    cartaoAtual--;
    mostrarcartao();

})

function mostrarcartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function escondercartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}