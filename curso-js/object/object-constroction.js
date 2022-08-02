const car = {
    model:'A4',
    price: 89000,
    owner:{
        name: 'Mirna',
        age: 21,
        adress: {
            street: 'blabla',
            number: 42
        }
    }, 
    drivers: [{
        name:'Wirt',
        age: 19
    },
    {
        name: 'Beatrice',
        age: 18
    }],
    somefunction() {}
}

console.log(car)

//função construtora

function Product(name, price, discount) {
    this.name = name //public
    this.getPriceWithdiscount = () => {
        return price * (1 - discount)
    }
}

const p1 = new Product('Eraser', 3.99, 0.1)
console.log(p1.getPriceWithdiscount())

//função factory
function createEmployee(name, salary, faults){ 
    return {
        name, 
        salary,
        faults,
        getMonthSalary() {
            return (salary / 30) * (30 - faults)
        }
    }
}
const f1 = createEmployee('Wirt', 7980, 4)
console.log(f1.getMonthSalary())

//Object.create
const son = Object.create(null)
son.name = 'Gregory'
console.log(son.name)

//A partir de um Json
const fromJson = JSON.parse('{"info": "im a json"}')
console.log(fromJson.info)