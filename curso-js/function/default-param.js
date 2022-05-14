/* melhores formas de gerar valor padrão
   há outras estratégias, como a = a || 1
   mas essas são as mais seguras
*/

function soma1(a, b, c) {
    a = isNaN(a) ? 0 : a
    b = isNaN(b) ? 0 : b
    c = isNaN(c) ? 0 : c

    return a + b + c
}

console.log(soma1(), soma1(1,2), soma1(1, 2, 3), soma1(0,0,0,0));

// melhor
function soma2(a = 0, b = 0, c = 0) {
    return a + b + c
}

console.log(soma2(), soma2(1,2), soma2(1, 2, 3), soma2(0,0,0,0));

