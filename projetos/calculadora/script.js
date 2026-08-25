let resultado = document.getElementById('conta')
let numeros = document.querySelectorAll('.numero')
let operacaos = document.querySelectorAll('.operacao')
let operacao_clicada = ''
let numero_clicado = 0
let n1 = ''
let n2 = ''

operacaos.forEach(botao => {
    botao.addEventListener('click', function(evento) {
        operacao_clicada = evento.target.value

        resultado.innerHTML += ` ${operacao_clicada} `
    })
})

numeros.forEach(botao => {
    botao.addEventListener('click', function(evento) {
        numero_clicado = evento.target.value

        resultado.innerHTML += numero_clicado
        if (operacao_clicada) {
            n2 += numero_clicado
        }
        else {
            n1 += numero_clicado
        }
    })
})

function igual() {
    if (n2 == '') {
        alert('Faça uma conta!')
    }
    else {
        let res_conta = 0
        n1 = Number(n1)
        n2 = Number(n2)
        if (operacao_clicada == '/') {
            res_conta = n1 / n2
        }
        else if (operacao_clicada == '*') {
            res_conta = n1 * n2
        }
        else if (operacao_clicada == '-') {
            res_conta = n1 - n2
        }
        else if (operacao_clicada == '+') {
            res_conta = n1 + n2
        }

        resultado.innerHTML = res_conta
        n1 = res_conta
        n2 = ''
        operacao_clicada = ''
    }
}

function apagar() {
    operacao_clicada = ''
    numero_clicado = 0
    n1 = ''
    n2 = ''
    resultado.innerHTML = ''
}


