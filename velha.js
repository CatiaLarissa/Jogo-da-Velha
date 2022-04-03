var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById("Jogador-Selecionado");
var vencedorSelecionado = document.getElementById("Vencedor-Selecionado");
var quadrados = document.getElementsByClassName("quadrado");

mudarJogador(valor = "X");

function escolherQuadrado(id) {
    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== "-") {
        return
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = 0000;

    if (jogador === "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }

    mudarJogador(jogador);
    checarQuadrados();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

function checarQuadrados() {
    var quadrado1 = document.getElementById("1");
    var quadrado2 = document.getElementById("2");
    var quadrado3 = document.getElementById("3");
    var quadrado4 = document.getElementById("4");
    var quadrado5 = document.getElementById("5");
    var quadrado6 = document.getElementById("6");
    var quadrado7 = document.getElementById("7");
    var quadrado8 = document.getElementById("8");
    var quadrado9 = document.getElementById("9");

    if (checaVencedor(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return
    }
    if (checaVencedor(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return
    }
    if (checaVencedor(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return
    }
    if (checaVencedor(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return
    }
    if (checaVencedor(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return
    }
    if (checaVencedor(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return
    }
    if (checaVencedor(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return
    }
    if (checaVencedor(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function checaVencedor(quadrado1, quadrado2, quadrado3) {
    var eIgual = false;

    if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true;
    }
    return eIgual;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = "rgb(14, 166, 204)";
    quadrado2.style.background = "rgb(14, 166, 204)";
    quadrado3.style.background = "rgb(14, 166, 204)";
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = " ";

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}