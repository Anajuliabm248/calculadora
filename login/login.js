function toggleSenha() {
    const senhaInput = document.getElementById('senha');
    const iconeOlho = document.getElementById('icone-olho');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        iconeOlho.src = '../imagens/login/olho-aberto.png';
    } else {
        senhaInput.type = 'password';
        iconeOlho.src = '../imagens/login/olho-fechado.png';  
    }
}
