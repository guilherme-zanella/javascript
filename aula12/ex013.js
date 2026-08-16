const dia_semana = new Date().getDay()

console.log(`O dia da semana é:`)

switch (dia_semana) {
    case 0 :
        console.log('Domigo')
        break
    case 1 :
        console.log('Segunda')
        break
    case 2 :
        console.log('Terça')
        break
    case 3 :
        console.log('Quarta')
        break
    case 4 :
        console.log('Quinta')
        break
    case 5 :
        console.log('Sexta')
        break
    case 6 :
        console.log('Sábado')
        break
    default :
        console.log('Dia da semana inválido')
        break
}