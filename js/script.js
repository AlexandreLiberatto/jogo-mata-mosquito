
let altura = 0
let largura = 0

const ajustaTamanhoDoPalcoJogo = () => {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoDoPalcoJogo()

let posicaoX = Math.floor(Math.random() * largura) - 90
let posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

/* ====criar elemento html==== */
let mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = 'mosquito1'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)

const tamanhoAleatorio = () => {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

tamanhoAleatorio()
