const name = 'Debora'
const concatenacao = 'Amo-te' + name + '!' //Concatenação simples.
const templatestring = `
    Amo-te
    ${name}!`
//O template strig permite quebras de linha e expressoẽs.
console.log(concatenacao, templatestring)

//expressoes...

console.log(`1 + 1 = ${1 + 1}`)
//Mostrou a soma apenas dentro da expressão com o $.

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
//É possível chamar uma função dentro de um template String.
