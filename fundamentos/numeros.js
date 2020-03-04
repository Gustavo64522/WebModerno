const numero1 = '1'
const numero2 = Number('2.0')
console.log(numero1, numero2)
console.log(Number.isInteger(numero2)) //Verifica se a variável numero2 é um valor inteiro ou não.

// 

const prova1 = 10
const prova2 = 0
const media_prova = (prova1 + prova2) / 2
console.log(media_prova)

const peso1 = 1.0
const peso2 = Number('2.0')
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 + peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))   //Epecifica a quantidade de casas decimais que vão aparecer.
console.log(media.toString(2))  //Retorna o valor de media em String e o parâmetro 2 tranforma em binário
console.log(typeof media)