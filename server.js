const express = require('express')
const port = 3000
const fs = require("fs");
const server = express()
server.use(express.json());
server.use(express.urlencoded());
server.use(express.static('public'));

server.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
});

server.get('/api/get', (req, res) => {
    res.json('get data');
})

server.post('/api/post', (req, res) => {
    if (req.body) {
        console.log('req', req.body)
        res.sendStatus(200);
    }
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})