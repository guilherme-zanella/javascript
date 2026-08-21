let tab = document.getElementById('tabuada')
tab.style.display = 'none'

function tabuada() {
    let txtn = document.getElementById('numero').value
    let n = Number(txtn)

    if (txtn == '') {
        alert('Erro! Por favor preencha o campo.')
    }
    else {
        tab.style.display = 'block'
        tab.innerText = ''

        let c = 0
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c ++
        }
    }
}