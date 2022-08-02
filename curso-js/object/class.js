class grandpa {
    constructor(lastname) {
        this.lastname = lastname
    }
}

class father extends grandpa {
    constructor(lastname, profission = 'Teacher') {
        super(lastname)
        this.profission = profission
    }
}

class son extends father {
    constructor() {
        super('Silva')
    }
}

const son1 = new son
console.log(son1)