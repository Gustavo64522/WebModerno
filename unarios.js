let num1 = 1
let num2 = 2

num1++  //Adiciona uma unidade ao valor da variavel
console.log(num1)
--num1  //Remove uma unidade da variavel
console.log(num1)

console.log(++num1 === num2--)  //Resulta verdadeiro pois ele faz a comparação antes de remover o num2.
console.log(num1 === num2)