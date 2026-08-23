let res_txt = document.getElementById('resultado')
let res_list = document.getElementById('num_list')
let list_n = []

res_list.style.display = 'none'

function adicionar() {
    let n_txt = document.getElementById('numero').value
    let n = Number(n_txt)
    if (n_txt.length == 0) {
        alert('Por favor! preencha o campo.')
    }
    else {
        if (n < 1 || n > 100) {
            alert('Número inválido! Digite um número entre 1 e 100.')
        }
        else {
            res_list.style.display = 'block'
            res_txt.innerHTML = ''
            
            if (!list_n.includes(n)) {
                let item = document.createElement('option')
                item.text = `${n} adicionado`
                res_list.appendChild(item)

                list_n.push(n)
            }
            else {
                alert('Esse número já foi adicionado!')
            }
        }
    }
}

function finalizar() {
    res_txt.innerHTML = ''
    if (list_n.length == 0) {
        alert('Erro! Adicione números na lista.')
    }
    else {
        let maior = 0
        let menor = 0
        let soma = 0
        for (let i = 0; i < list_n.length; i++) {
            if (i == 0) {
                maior = list_n[i]
                menor = list_n[i]
            }
            else {
                if (list_n[i] > maior) {
                    maior = list_n[i]
                }
                if (list_n[i] < menor) {
                    menor = list_n[i]
                }
            }
            soma += list_n[i]
        }
        let media = soma / list_n.length

        res_txt.innerHTML += `<p>Ao todo, temos ${list_n.length} números cadastrados.</p>`
        res_txt.innerHTML += `<p>O maior número adicionado foi ${maior}</p>`
        res_txt.innerHTML += `<p>O menor número adicionado foi ${menor}</p>`
        res_txt.innerHTML += `<p>A soma de todos os números é ${soma}</p>`
        res_txt.innerHTML += `<p>A média dos números é ${media}</p>`
    }
}