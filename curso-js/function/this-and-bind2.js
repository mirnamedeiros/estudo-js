function Pessoa() {
    this.idade = 0

    const self = this //como é const, vai guardar o this do contexto certo
    setInterval(function() {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
    //no caso do bind, como está executando dentro da função pessoa, então o this aponta para pessoa
}

new Pessoa