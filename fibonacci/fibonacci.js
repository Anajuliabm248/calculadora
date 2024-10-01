function fibonacci() {
    let ant = 0;      // Primeiro número da sequência
    let atual = 1;    // Segundo número da sequência
    let numAux;
    let cont = 1;     // Contador de iterações
    let valor = parseInt(document.getElementById('valor').value); // Converte o valor para um número inteiro

    // Limpa o resultado anterior
    document.getElementById('resultado').innerHTML = '';

    // Verifica se o valor é 0 ou menor
    if (valor <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um número maior que 0.';
        return;
    }

    // Se o valor for 1, apenas exibe 0
    if (valor === 1) {
        document.getElementById('resultado').innerHTML = '0';
        return;
    }

    // Adiciona o primeiro número da sequência
    document.getElementById('resultado').innerHTML += ant + ' , '; // Adiciona 0

    // Adiciona o segundo número da sequência se o valor for maior que 1
    if (valor >= 2) {
        document.getElementById('resultado').innerHTML += atual + ' , '; // Adiciona 1
    }

    // Gera a sequência de Fibonacci a partir do terceiro número
    while (cont < valor - 1) { // cont precisa ser menor que valor - 1, pois já adicionamos 2 números
        numAux = ant + atual;
        document.getElementById('resultado').innerHTML += numAux + ' , ';
        ant = atual; 
        atual = numAux; 
        cont++; 
    }
}

