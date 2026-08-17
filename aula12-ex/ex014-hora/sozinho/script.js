const hora = new Date().getHours()
const corpo = document.body
const manha = document.getElementById('img_manha')
const tarde = document.getElementById('img_tarde')
const noite = document.getElementById('img_noite')
const text_hora = document.getElementById('resultado_hora')

text_hora.innerHTML = `Agora são <strong>${hora}</strong> horas.`

if (hora < 12) {
    manha.classList.toggle('ativo')
    corpo.style.backgroundColor = 'rgb(248, 219, 91)'
}
else if (hora < 18) {
    tarde.classList.toggle('ativo')
    corpo.style.backgroundColor = 'rgb(255, 106, 69)'
}
else {
    noite.classList.toggle('ativo')
    corpo.style.backgroundColor = 'rgb(134, 134, 134)'
}