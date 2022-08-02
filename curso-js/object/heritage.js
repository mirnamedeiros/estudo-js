const ferrari = {
    model: 'F04',
    velMax: 324
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// Cadeia de prototipos (prototype chain)
const grandpa = { attr1: 'A' }
const dad = { __proto__: grandpa, attr2: 'B', attr3: 'E' }
const son = { __proto__: dad, attr3: 'C' }
console.log(son.attr0, son.attr1, son.attr2, son.attr3)


const car = {
    currentVel: 0,
    maxVel: 200,
    acelarate(delta) {
        if (this.currentVel + delta <= this.velMax) {
            this.currentVel += delta
        } else {
            this.currentVel = this.maxVel
        }
    },
    status() {
        return `${this.currentVel}Km/h of ${this.maxVel}Km/h`
    }
}

const ferrari2 = {
    model: 'F40',
    maxVel: 324 //shadowing
}

const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari2, car)
Object.setPrototypeOf(volvo, car)

volvo.acelarate(100)
console.log(volvo.status())

ferrari2.acelarate(350)
console.log(ferrari2.status())