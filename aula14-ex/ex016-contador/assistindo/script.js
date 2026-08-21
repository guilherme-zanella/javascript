function contador() {
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        alert('ERRO! Por favor preencha os campos.')
    }
    else {
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO = 1.')
            p = 1
        }

        resultado.innerHTML = 'Contando: <br>'

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} 👉 `
            }
        }
        else {
            for (let c = i; c >= f; c -= p) {
             resultado.innerHTML += `${c} 👉 `
            }
        }
        resultado.innerHTML += `🏁`
    }
}