let valor   //variável não inicializada gera Undefined
console.log(valor)

//console.log(valor2) Gera is not defined, nem foi declarado "error"

valor = null //Ausência de valor
console.log(valor)
//console.log(valor.toString)   Não é possivel acessar um valor nulo.

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 50
console.log(produto.preco)

produto.preco = undefined   //Evite usar undefined
console.log(!!produto.preco)    //Como é undefined gera false
console.log(produto)    //O atributo preco é undefined
produto.preco = null    //Como dizer que o produto está sem preço
console.log(!!produto.preco)
console.log(produto)