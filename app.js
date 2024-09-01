function queryTagTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if (quantidade > (ate - de + 1)) {
        alert('Quantidade de números a sortear é maior que o intervalo disponível');
        return; // o return finaliza a função trazendo o retorno de ... nada
    }
    
    let lista = [];
    
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (lista.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        lista.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${lista.join(', ')} </label>`; 
    
    alterarStatusBotao();
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`; 
    
    alterarStatusBotao();

}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}