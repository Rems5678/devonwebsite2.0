const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
})

app.listen(port, (err) => {
    console.log('listening on port ', port)
})