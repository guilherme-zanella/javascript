function tabuada() {
    let resultado = document.getElementById('resultado')
    const numero = Number(document.getElementById('numero').value)
    
    if (numero == '') {
        alert('Por favor! Preencha o campo.')
    }
    else {
        resultado.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            resultado.innerHTML += `<li>${numero} X ${i} = ${numero * i}</li>`
        }
    }
}