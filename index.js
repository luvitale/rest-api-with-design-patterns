const express = require('express')
const parser = require('body-parser')
const services = require('./services')
const handlers = require('./handlers')

const app = express()

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
 
// parse application/json
app.use(parser.json())

const port = 3000

app.get('/', handlers(services).get)
app.post('/', handlers(services).post)
app.put('/:id', handlers(services).put)
app.delete('/:id', handlers(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))