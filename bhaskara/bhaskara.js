function baskara() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Verifica se a é diferente de zero
    if (a === 0) {
        document.getElementById('resultado').innerHTML = 'O coeficiente "a" não pode ser zero.';
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById('resultado').innerHTML = 'Não existem raízes reais.';
    } else {
        const xm = (-b + Math.sqrt(delta)) / (2 * a); // raiz positiva
        const xn = (-b - Math.sqrt(delta)) / (2 * a); // raiz negativa
        document.getElementById('resultado').innerHTML = `X¹ = ${xm.toFixed(2)} <br> X² = ${xn.toFixed(2)}`;
    }
}
