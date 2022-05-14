function Carro(velocidadeMaxima = 200, delta = 5) {

    let velocidadeAtual = 0

    // metodo publico
    this.acelerar =  function() {
        velocidadeAtual + delta <= velocidadeMaxima ? 
                                velocidadeAtual += delta : 
                                velocidadeAtual = velocidadeMaxima
    }

    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferari = new Carro(350, 20)
ferari.acelerar()
ferari.acelerar()
ferari.acelerar()
console.log(ferari.getVelocidadeAtual())