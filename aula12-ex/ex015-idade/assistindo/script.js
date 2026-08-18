function verificar() {
    const ano = new Date().getFullYear()
    const form_ano = document.getElementById('txtano')
    const resultado = document.getElementById('resultado')
    if (form_ano.value.length == 0 || form_ano.value > ano) {
        window.alert('Erro. Verifique os dados e tente novamente!')
    }
    else {
        const form_sexo = document.getElementsByName('radsex')
        const idade = ano - Number(form_ano.value)
        let genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (form_sexo[0].checked) {
            genero = 'Homem'
            if (idade < 3) {
                img.setAttribute('src', '../imagens/bebe.jpg')
            }
            else if (idade < 13) {
                img.setAttribute('src', '../imagens/menino-criança.jpg')
            }
            else if (idade < 20) {
                img.setAttribute('src', '../imagens/menino-adolescente.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', '../imagens/menino-adulto.jpg')
            }
            else {
                img.setAttribute('src', '../imagens/menino-idoso.jpg')
            }
        }
        else {
            genero = 'Mulher'
            if (idade < 3) {
                img.setAttribute('src', '../imagens/bebe.jpg')
            }
            else if (idade < 13) {
                img.setAttribute('src', '../imagens/menina-criança.jpg')
            }
            else if (idade < 20) {
                img.setAttribute('src', '../imagens/menina-adolescente.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', '../imagens/menina-adulto.jpg')
            }
            else {
                img.setAttribute('src', '../imagens/menina-idosa.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade}`
        resultado.appendChild(img)
    }
}