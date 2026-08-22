let numeros = [5,8,4]
numeros[3] = 6
numeros.push(7) // Adiciona no último elemento

console.log(`Nosso vetor é ${numeros} e tem ${numeros.length} números`)
console.log(numeros.sort().reverse()) // organiza os numeros

let pos = numeros.indexOf(5)
if (pos == -1) {
    console.log('O valor 5 não existe')
}
else {
    console.log(`O valor 5 está na posição ${pos}`)
}
