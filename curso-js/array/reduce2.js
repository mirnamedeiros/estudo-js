const alunos = [
    { nome: 'wirt', nota: 7.3, bolsista: false },
    { nome: 'lorna', nota: 9.2, bolsista: true },
    { nome: 'gregory', nota: 9.8, bolsista: true },
    { nome: 'jimmy', nota: 8.7, bolsista: false }
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log("Todos são bolsistas?",alunos.map(a => a.bolsista).reduce(todosBolsistas))

const umBolsista = (resultado, bolsista) => resultado || bolsista
console.log("Há algum bolsista?",alunos.map(a => a.bolsista).reduce(umBolsista))