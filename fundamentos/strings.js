const escola = "Adv3ntista"

console.log(escola.charAt(4))
//Monstrou o índice 4 da string escola.

console.log(escola.charAt(5))
//Monstrou o índice 5 da string escola.

console.log(escola.charCodeAt(3))
//Monstrou o índice 4 convertido na tabela Ask da string escola.

console.log(escola.indexOf(3))
//Monstrou o índice 3 (3) convertido na tabela Ask da string escola.

console.log(escola.substring(1))
//Mostrou a string escola a partir do índice 1.

console.log(escola.substring(0, 3))
//Mostrou a string a partir do indice 0 até o indice 3, sem incluir o último.

console.log('Escola '.concat(escola).concat("!"))
//Concatenou uma string com uma constante.

console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e'))
//O replace substituiu o índice 3 pela letra 'e'.

console.log('Debora*Glace*Julia'.split('*'))
//O split gerou um array separando a string a partir do paramentro '*'.