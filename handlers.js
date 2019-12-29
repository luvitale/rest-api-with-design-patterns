module.exports = ({ axios }) => ({
    get: async (req, res) => {
        const { data } = await axios.get('/users')
        return res.send(data)
    },
    post: async (req, res) => {
        const { data } = await axios.post('/users', req.body)
        return res.send(data)
    },
    put: async (req, res) => {
        const { data } = await axios.put('/users/${req.params.id}', req.body)
        return res.send(data)
    },
    delete: async (req, res) => {
        await axios.delete('/users/${req.params.id}')
        return res.sendStatus(204)
    },
})