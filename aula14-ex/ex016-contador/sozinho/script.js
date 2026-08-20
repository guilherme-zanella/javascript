const texto = document.getElementById('texto')
const resultado = document.getElementById('resultado')

function contador() {
    const inicio = Number(document.getElementById('inicio').value)
    const final = Number(document.getElementById('final').value)
    let passo = Number(document.getElementById('passo').value)

    if (passo == 0) {
        passo = 1
        alert('Passo inválido! Considerando PASSO = 1')
    }

    resultado.innerHTML = ''
    texto.innerHTML = 'Contando:'
    for (let n = inicio; n <= final; n += passo) {
        resultado.innerHTML += `${n} 👉 `
    }
    resultado.innerHTML += '🏁'
}