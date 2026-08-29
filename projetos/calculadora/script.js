let resultado = document.getElementById('conta')
let numeros = document.querySelectorAll('.numero')
let operacaos = document.querySelectorAll('.operacao')
let operacao_clicada = ''
let numero_clicado = 0
let n1 = ''
let n2 = ''
let his = []
let his_tela = document.getElementById('historico')
let cal_tela = document.getElementById('calculo')
let cliques = 0

operacaos.forEach(botao => {
    botao.addEventListener('click', function(evento) { 
        if (cliques == 0) {
            operacao_clicada = evento.target.value
        }

        const botao = document.getElementById('botao_his')
        if (evento.target) {
            his_tela.className = 'normal'
            cal_tela.className = 'normal'
            botao.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i>'
        }

        cliques += 1
        resultado.innerHTML += ` ${operacao_clicada} `
        if (cliques == 2) {
            igual(operacao_clicada)
            if (n2 != '') {
                operacao_clicada = evento.target.value
            }
        }
    })
})

numeros.forEach(botao => {
    botao.addEventListener('click', function(evento) {
        numero_clicado = evento.target.value

        const botao = document.getElementById('botao_his')
        if (evento.target) {
            his_tela.className = 'normal'
            cal_tela.className = 'normal'
            botao.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i>'
        }

        resultado.innerHTML += numero_clicado
        if (operacao_clicada) {
            n2 += numero_clicado
        }
        else {
            n1 += numero_clicado
        }
    })
})

function igual(oper='') {
    if (n2 == '') {
        alert('Faça uma conta!')
        if (cliques == 2) {
            resultado.innerHTML = resultado.innerHTML.slice(0, -3)
            cliques -= 1
        }
    }
    else {
        let res_conta = 0
        n1 = Number(n1)
        n2 = Number(n2)
        if (operacao_clicada == '/') {
            if (n2 == 0) {
                alert('Não é possível fazer divisões por zero!')
                n2 = 1
            }
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

        his.push(`${n1} ${operacao_clicada} ${n2} = ${res_conta}`)
        resultado.innerHTML = `${res_conta}${oper}`
        n1 = String(res_conta)
        n2 = ''
        operacao_clicada = oper
        cliques = 0
        if (his.length == 5) {
            his.shift()
            his_tela.shift()
        }
    }
}

function apagar() {
    if (n2 != '') {
        n2 = n2.slice(0, -1)
        resultado.innerHTML = resultado.innerHTML.slice(0, -1)
    }
    else if (operacao_clicada != '') {
        operacao_clicada = ''
        resultado.innerHTML = resultado.innerHTML.slice(0, -3)
        cliques -= 1
    }
    else {
        n1 = String(n1).slice(0, -1)
        resultado.innerHTML = resultado.innerHTML.slice(0, -1)
    }
}

function tema() {
    const corpo = document.body
    const botao = document.getElementById('tema')

    corpo.classList.toggle('claro')
    if (corpo.className == 'claro') {
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
    else {
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
}

function historico() {
    const botao = document.getElementById('botao_his')
    
    if (botao.click) {
        his_tela.classList.toggle('ativo')
        cal_tela.classList.toggle('desativo')
    }

    if (his_tela.className == 'normal') {
        botao.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i>'
    }
    else {
        botao.innerHTML = '<i class="fa-solid fa-x"></i>'
    }

    if (his.length > 0) {
        his_tela.innerHTML = '<p>Histórico de contas:</p>'
        for (let i = 0; i < his.length; i++) {
            his_tela.innerHTML += ` ${his[i]}; <br>`
        }
    }
}
