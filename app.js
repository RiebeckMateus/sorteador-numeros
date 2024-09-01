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
    
    // alert(`Quantidade: ${quantidade}`);
    // alert(`Do número: ${de}`);
    // alert(`Até o número: ${ate}`);
    
    let numero;
    // alert(numero);
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (lista.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        lista.push(numero);
    }
    
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${lista.join(', ')} </label>`
    

}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}