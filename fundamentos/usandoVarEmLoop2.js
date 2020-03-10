const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

//Como a VAR não possui escopo de bloco dentro de função, ele retorna o valor final da condição. 

funcs[2]()
funcs[8]()