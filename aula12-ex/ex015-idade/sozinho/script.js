
function verficar() {
    const nascimento = Number(document.getElementById('nascimento').value)
    const idade = Number(new Date().getFullYear()) - nascimento
    const resultado = document.getElementById('resultado')
    const sexo = document.querySelector('input[name="sexo"]:checked').value
    const imagem = document.getElementById('imagem')

    imagem.style.display = 'block'
    resultado.className = 'ativo'
    if (sexo == 'homem') {
        resultado.innerText = `Detectamos um homem de ${idade} anos`
        
        if (idade < 3) {
            imagem.src = '../imagens/bebe.jpg'
        }
        else if (idade < 12) {
            imagem.src = '../imagens/menino-criança.jpg'
        }
        else if (idade < 18) {
            imagem.src = '../imagens/menino-adolescente.jpg'
        }
        else if (idade < 60) {
            imagem.src = '../imagens/menino-adulto.jpg'
        }
        else {
            imagem.src = '../imagens/menino-idoso.jpg'
        }
    }
    else {
        resultado.innerText = `Detectamos uma mulher de ${idade} anos`

        if (idade < 3) {
            imagem.src = '../imagens/bebe.jpg'
        }
        else if (idade < 12) {
            imagem.src = '../imagens/menina-criança.jpg'
        }
        else if (idade < 18) {
            imagem.src = '../imagens/menina-adolescente.jpg'
        }
        else if (idade < 60) {
            imagem.src = '../imagens/menina-adulto.jpg'
        }
        else {
            imagem.src = '../imagens/menina-idosa.jpg'
        }
    }
}