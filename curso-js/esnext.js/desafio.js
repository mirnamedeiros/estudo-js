const fs = require('fs')
const path = require('path')


const lerConteudo = caminho => {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_,conteudo) {
            resolve(conteudo.toString())
        })
        console.log("Testando assincronismo")
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerConteudo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O conteudo do arquivo é: ${conteudo}`)
    .then(console.log)