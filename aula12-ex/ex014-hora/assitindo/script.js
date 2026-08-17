function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.src = '../imagens/manha.jpg'
        document.body.style.backgroundColor ='#F2C53D'
    }
    else if (hora < 18) {
        img.src = '../imagens/tarde.jpg'
        document.body.style.backgroundColor = '#ff7348'
    }
    else {
        img.src = '../imagens/noite.jpg'
        document.body.style.backgroundColor = '#041026'
    }
}
