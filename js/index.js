function iniciarJogo() {
    let nivel = document.querySelector('#nivel').value;

    if (nivel === '') {
        alert('Selecione um nível para iniciar o jogo!');
        return false;
    } else {
        window.location.href = "jogo.html?" + nivel;
    }
}
