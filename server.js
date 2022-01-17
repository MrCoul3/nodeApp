const express = require('express')
const server = express()
const port = 3000

server.use(express.static('public'));

server.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
});


server.get('/api', (req, res) => {
    res.json('some data');
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})