const express = require('express');
const cors = require("cors");
var bodyParser = require('body-parser')
let app = express();
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
app.use(cors());

const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/products', async (req,res) => {
    await client.connect();
    let db = client.db("Mydb");
    let mycollection  = db.collection("products");
    res.json(await mycollection.find({}).toArray());
})

app.post('/products', async (req, res) => {
    const data = req.body;
    await client.connect();
    let db = client.db("Mydb");
    let mycollection = db.collection('products');
    await mycollection.insertOne(data);
    res.json(await mycollection.find({}).toArray());
})

app.listen(port);