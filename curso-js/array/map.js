// For com propósito

const nums = [1, 2, 3, 4, 5]
// O map gera um novo array
let result = nums.map(function (e) {
    return e * 2
})

console.log(result)

const sum10 = e => e + 10
const triple = e => e * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(sum10).map(triple).map(toMoney)
console.log(result)