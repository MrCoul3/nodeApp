Setup MongoDB:
1. Install mongodb from official site https://www.mongodb.com/try/download/community
2. Run mongod.exe
3. Run mongo.exe
    test commands:
        use test
        db.users.insertOne( { name: "Tom" } )
        db.users.find()
4. npm i mongodb
5 .Insert into server.js file folowing code:

    const MongoClient = require("mongodb").MongoClient;
    const mongoClient = new MongoClient("mongodb://localhost:27017/");

interactions with the database:

   async function run() {
       try {
           await mongoClient.connect();
           const db = mongoClient.db("admin");
           const result = await db.command({ping: 1});
           console.log("connection established");
           console.log('result', result)
       }catch(err) {
           console.log(err);
       } finally {
           await mongoClient.close();
           console.log("connection closed");
       }
   }
   run();