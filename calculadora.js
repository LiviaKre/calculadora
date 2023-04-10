var valorAtual = '0';

function adicionarValor(botao) {
    var valor = $(botao).text();
    if (valorAtual == 0) {
        valorAtual = valor;
    }
    else {
        valorAtual = valorAtual + valor;
    }

    atualizarDisplay();

}

function limpar() {
   valorAtual = '0';
   atualizarDisplay();
}

function calcular() {
    valorAtual = eval(valorAtual);
    atualizarDisplay();
}
function atualizarDisplay() {
    document.getElementById('display').innerText = valorAtual;
}