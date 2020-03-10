console.log(Math.ceil(6.2)) //Arredonda para cima

const obj1 = {}
obj1.nome = 'Bola'
// Pode-se atribuir devva forma bj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Sofá')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()