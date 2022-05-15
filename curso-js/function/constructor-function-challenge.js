function Pessoa(nome) {
    
    this.nome = nome

    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const pessoa1 = new Pessoa('Mirna')
pessoa1.falar()