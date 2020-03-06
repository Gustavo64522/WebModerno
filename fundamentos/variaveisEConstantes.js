var a = 3   //a recebe 3
let b = 4   //mesma coisa, porém recomendado por ser mais moderno

var a = 30
b = 40      //o LET Não se pode redeclarar (substituir) uma variável com let
//Após ja declarada uma variável, você pode alterar o seu valor
console.log(a, b)

a = 300
b = 400
console.log(a, b)

const c = 5
//c = 50
//constantes não podem ser alteradas
console.log(c)