const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const PORT = 5050;
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:qwerty@localhost:27017";
const client = new MongoClient(MONGO_URL);

app.get('/getUsers', async(req, res) => {
    await client.connect(URL);
    console.log('Connected successfully to server');

    const db = client.db('aineshsridhartest-db');
    const data = await db.collection('users').find({}).toArray();
    
    client.close();
    res.send(data)
})

app.post('addUsers', async(req, res) => {
    const userObj = req.body;
    console.log(req.body);
    await client.connect(URL);
    console.log('Connected successfully to server');
    const db = client.db('aineshsridhartest-db');
    const data = await db.collection('users').insertOne(userObj);
    console.log(data);
    console.log("data inserted to DB");
    client.close();
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

