module.exports = ({ axios }) => ({
    get: async (req, res) => {
        const { data } = await axios.get('/users')
        res.send(data)
    }
})