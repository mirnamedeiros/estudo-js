let dobro = function(a) { 
    return 2 * a
}

dobro = a => {
    return 2 * a
}

dobro = a => 2*a //retorno ímplicito
console.log(dobro(Math.PI))

let ola = function (){
    return 'ola'
}

ola = _ => 'ola' // possui parametro

ola = () => 'ola'
console.log(ola());