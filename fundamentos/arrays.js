const valores = [7.7, 8.8, 9.9, 5.5]
console.log(valores[0], valores[3])  //Mostra o valor que está no índice escolhido do array
console.log(valores[50]) //Gera undefined acessar um indice que não existe

valores[4] = 10 //Adicionar um elemento em um índice do array
console.log(valores)


valores[7] = 20 //Adicionar um elemento em um índice do array inexistente
console.log(valores)

console.log(valores.length)  //O length mostra quantos elementos tem no array

valores.push({ id: 3 }, false, null, 'teste')  //Recebe vários tipos de elementos
console.log(valores)

console.log(valores.pop())  //Remove o último elemento do array.
delete valores[0]   //Deleta o valor no determinado indice.
console.log(valores)
console.log(typeof (valores))  //Mostra que um array é um objeto.