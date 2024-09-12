const express = require("express");


const app = express();

app.use(express.json());







app.listen(3002, () => {
    console.log("app is listening on port 3002")
})