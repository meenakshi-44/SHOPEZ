const Product = require("./models/Product");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/admin")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.get("/products", async (req, res) => {
    try {
        console.log("Database:", mongoose.connection.name);
console.log("Collection:", Product.collection.name);

const products = await Product.find();

console.log(products);

res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});