let num = document.getElementById('numero')
let lista = document.getElementById('flista')
let res = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }
    else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        
        for (let i = 0; i < valores.length; i++) {
            if (valores[i] > maior) {
                maior = valores[i]
            }
            if (valores[i] < menor) {
                menor = valores[i]
            }
            soma += valores[i]
        }
        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é de ${media}</p>`
    }
}
