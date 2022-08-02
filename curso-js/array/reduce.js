const alunos = [
    { nome: 'wirt', nota: 7.3, bolsista: false },
    { nome: 'lorna', nota: 9.2, bolsista: true },
    { nome: 'gregory', nota: 9.8, bolsista: true },
    { nome: 'jimmy', nota: 8.7, bolsista: false }
]

const resultado = alunos.map(a=>a.nota).reduce(
    function(acumulador, atual){
        console.log(acumulador, atual)
        return acumulador+atual
    },10)//valor inicial

console.log(resultado)