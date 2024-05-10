const express = require("express");
const router = require("./src/routers/book.route");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(cors());

require("dotenv").config();



const PORT = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use("/",router);

app.listen(PORT, () => {
    console.log(`server đang lắng nghe http://localhost:${PORT}`);
})