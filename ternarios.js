const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// A constante resultado recebe o parametro nota, SE nota for maior ou igual a 7, return Aprovado else Reprovado
// Nota -> O parâmetro
// ? -> Seria como o return, ou para separar a terceira operação
// : -> Seria o Else 

console.log(resultado(7.1))
console.log(resultado(6.9))