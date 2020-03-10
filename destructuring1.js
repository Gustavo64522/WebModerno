// novo recurso EC2015

const pessoa = {
    nome: 'Gustavo',
    idade: 18,
    endereco: {
        logradouro: 'Rua Jorje Jubran',
        numero: 43
    }
}

const { nome, idade } = pessoa
console.log

const { nome: n, idade: i } = pessoa
console.log(i, n)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)