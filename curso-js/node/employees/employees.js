const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const getChineses = e => e.pais === 'China'
const getWomen = e => e.genero === 'F'
const getMinSalary = (emplo, curEmplo) =>{
    return emplo.salario < curEmplo.salario ? emplo : curEmplo
}

axios.get(url).then(response =>{
    const employees = response.data

    const cwls = employees.filter(getChineses).filter(getWomen).reduce(getMinSalary)
    console.log('The chinese woman with lower salary is: \n',cwls)
})

