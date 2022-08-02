//exportando mesmo objeto do node, que uma vez criado retorna sempre a mesma instancia
const countA = require('./instanceSingle')
const countB = require('./instanceSingle')

//C e D são novas instancias criadas a partir de uma funcão factory
const countC = require('./instanceNew')()//para invocar a função factory
const countD = require('./instanceNew')()

countA.inc()
countA.inc()
console.log(countA.value,countB.value)

countC.inc()
countC.inc()
console.log(countC.value,countD.value)