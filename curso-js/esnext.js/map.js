const tecs = new Map()
tecs.set('react',{framework:false})
tecs.set('angular',{framework:true})

console.log(tecs.react)
console.log(tecs.get('react').framework)

const variousKeys = new Map([
    [function() {}, 'function'],
    [{}, 'object'],
    [123, 'number']
])

variousKeys.forEach((v,k) => {
    console.log(k,v)
})

console.log(variousKeys.has(123))
variousKeys.delete(123)
console.log(variousKeys.has(123))
console.log(variousKeys.size)

variousKeys.set(123,'a')
variousKeys.set(123,'b')//substituiu a pois tem a mesma chave
variousKeys.set(456,'b')
console.log(variousKeys)

//tem também
//set
//for of