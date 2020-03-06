//Primeira forma de adicionar objetos
const prod1 = {}
prod1.nome = 'Samsumg Galaxy S10'
prod1.preco = 3.000
prod1['Desconto legal'] = 0.40 //Evitar atributos com espaços
console.log(prod1)

//Segunda forma de adicionar objetos
const prod2 = {
    nome: 'iphone11',
    preco: 10.000
}

//Arquivo em JSON (JAV SRCIPT "Javascript Object Notation", formato escrito do JS)
'{ "nome": "Samsumg Galaxy S10", "preco": 3.000, "desconto": 0.40 }'

console.log(prod2)