const express = require('express')
const server = express();
const port = process.env.PORT || 5000;
server.use(express.json());
server.use(express.static('public'));

server.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
});

server.get('/api', (req, res) => {
    res.send({express: 'connected to express server is done'});
});

server.post('/api/post', (req, res) => {
    if (req.body) {
        console.log('req', req.body)
        res.sendStatus(200);
    }
});

server.set('/api/set', (req, res) => {

});

server.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});