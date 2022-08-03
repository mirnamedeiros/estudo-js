function funcionaOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        }
        else {
            resolve(valor)
        }
    })
}

// funcionaOuNao('Testando...', 0.1)
//     .then(v => console.log(`Valor: ${v}`))
//     .catch(err => console.log(`Erro: ${err}`))

funcionaOuNao('Testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))