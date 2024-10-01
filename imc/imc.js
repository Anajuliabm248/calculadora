
function calcularImc() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Calculando o IMC
    const imc = peso / (altura * altura);

    // Exibindo o resultado no HTML
    document.getElementById('resultado').innerText = nome + "o seu IMC é: " + imc.toFixed(2);
}