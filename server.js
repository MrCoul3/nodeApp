const express = require('express')
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://localhost:27017/");
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
        res.send({status: "ok"})
    }
});



server.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});

async function run() {
    try {
        await mongoClient.connect();
        const adminDB = mongoClient.db("admin");
        const pingResult = await adminDB.command({ping: 1});
        console.log("connection established");
        console.log('pingResult', pingResult)

        const testDB = mongoClient.db('test');
        const usersCollection = testDB.collection('users');
        const usersCollectionData = await usersCollection.find().toArray()
        console.log('usersCollectionData', usersCollectionData)
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
        console.log("connection closed");
    }
}
run();