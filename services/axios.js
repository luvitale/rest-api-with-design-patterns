const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const adapter = {
    get: url => instance.get(url)
}

module.exports = instance