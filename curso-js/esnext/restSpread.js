// operadores rest(juntar)/spread(espalhar)

//rest
function total(...nums) {
    let total = 0
    nums.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))

//spread como objeto
const empl = { name: 'Maria',salary: 12348.99}
const clone = {active: true, ...empl}
console.log(clone)

//spread com array
const gA = ['wirt', 'gregory']
const gB = ['jason', ...gA, 'beatrice']
console.log(gB)
