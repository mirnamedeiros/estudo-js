const carrinho = [
    '{ "nome":"borracha", "preco": 3.45}',
    '{ "nome":"caderno", "preco": 13.90}',
    '{ "nome":"lapis", "preco": 41.22}',
    '{ "nome":"caneta", "preco": 7.50}'
]

const toObj = e => JSON.parse(e)
const price = e => e.preco

const result = carrinho.map(toObj).map(price)
console.log(result)