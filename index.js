const express = require('express')
const parser = require('body-parser')
const services = require('./services')
const handlers = require('./handlers')
const app = express()
const port = 3000

app.get('/', handlers(services).get)
app.post('/', handlers(services).post)
app.put('/:id', handlers(services).put)
app.delete('/:id', handlers(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))