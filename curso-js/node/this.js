console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('\nDentro da função:')
    console.log(this === global)
    console.log(this === module)

    console.log(this === exports)
    console.log(this === module.exports)
}

logThis()

//THIS EM ARROW FUNCTION
// o this em arrow function é o this do objeto global, 
// ou seja, fazendo esse teste no Node, por exemplo, o que será retornado é um 
// objeto vazio. Enquanto que funções tradicionais possuem seu “próprio this”, 
// em arrow functions elas vão apontar para o objeto global, portanto, é preciso 
// ter cuidado quando usar o this em arrow functions.