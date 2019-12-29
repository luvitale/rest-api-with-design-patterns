const express = require('express')
const services = require('./services')
const handlers = require('./handlers')
const app = express()
const port = 3000

app.get('/', handlers(services).get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))