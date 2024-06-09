function iniciarJogo() {
    let nivel = document.querySelector('#nivel').value 

    if(nivel === ''){
        alert('Selecione um nível para inciar o jogo!')
        return false
    } else {
        alert(nivel)
    }
}