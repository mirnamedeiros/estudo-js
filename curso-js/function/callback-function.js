const fabricantes = ["Hyundai", "BMW", "Toyota"]

fabricantes.forEach(fabricante => console.log(fabricante))
// nesse caso o callback é chamado a cada novo elemento de fabricantes, 
// ou seja, os elementos funcionam como sendo os eventos

const notas = [1.2, 3.5, 7.8, 4.5, 9.4, 6.3, 7.1]

const notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)