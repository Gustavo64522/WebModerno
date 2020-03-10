const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

//Como LET possui escopo de bloco dentro de função, ele retorna os valores que foram incrementados durante o loop. 

funcs[2]()
funcs[6]()
funcs[8]()