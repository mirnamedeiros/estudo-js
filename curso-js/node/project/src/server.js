const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',(req, res) => {
    res.send(dataBase.getProducts())
})

app.get('/produtos/:id',(req, res) => {
    res.send(dataBase.getProduct(req.params.id))
})

app.post('/produtos',(req, res) => {
    const product = dataBase.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/produtos/:id',(req, res) => {
    const product = dataBase.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/produtos/:id',(req, res) => {
    const product = dataBase.deleteProduct(req.params.id)
    res.send(product)
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})