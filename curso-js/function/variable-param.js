function soma() {
    let soma = 0
    for(i in arguments) { 
        soma += arguments[i]
    }
    return soma
}

console.log(soma());
console.log(soma(1));
console.log(soma(40,3,5,78));

console.log(soma(4.3,'qlqrcoisa',3));