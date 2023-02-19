const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://localhost:27017/");
const server = express();
const port = process.env.PORT || 5000;
const { JSONRPCServer } = require("json-rpc-2.0");
const jsonRPC = new JSONRPCServer();
server.use(express.json());
server.use(express.static("public"));

const getUserID = (req) => {
  console.log("getUserID", req);
  return "getUserID";
};

async function getDBData(db, collection) {
  await mongoClient.connect();
  const testDB = await mongoClient.db(db);
  const usersCollection = await testDB.collection(collection);
  return await usersCollection.find().toArray();
}

server.post("/jsonrpc", (req, res) => {
  const jsonRPCRequest = req.body;

  jsonRPC.addMethod("add_content", () => "ok");
  jsonRPC.addMethod("get_users", () => getDBData("test", "users"));

  if (jsonRPCRequest.method === "add_content") {
    jsonRPC.receive(jsonRPCRequest).then((jsonRPCResponse) => {
      if (jsonRPCResponse) {
        res.json(jsonRPCResponse);
      }
    });
  }

  if (jsonRPCRequest.method === "get_users") {
    jsonRPC.receive(jsonRPCRequest).then((jsonRPCResponse) => {
      const offset = jsonRPCRequest.params.offset;
      const limit = jsonRPCRequest.params.limit;
      if (jsonRPCResponse) {
          jsonRPCResponse.result = jsonRPCResponse.result.filter(
          (item, index) => offset <= index && index < +limit + +offset
        );
        res.json(jsonRPCResponse);
      }
    });
  }
});

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/api", (req, res) => {
  res.send({ express: "connected to express server is done" });
});

server.post("/api/post", (req, res) => {
  if (req.body) {
    // console.log('req', req.body)
    res.send({ status: "ok" });
  }
});

server.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

async function run() {
  try {
    await mongoClient.connect();
    const adminDB = mongoClient.db("admin");
    const pingResult = await adminDB.command({ ping: 1 });
    console.log("connection established");
    console.log("pingResult", pingResult);

    // const testDB = mongoClient.db('test');
    // const usersCollection = testDB.collection('users');
    // const usersCollectionData = await usersCollection.find().toArray()
    // console.log('usersCollectionData', usersCollectionData)
  } catch (err) {
    console.log(err);
  } finally {
    await mongoClient.close();
    console.log("connection closed");
  }
}
// run();
