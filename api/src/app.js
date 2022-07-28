const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

app.listen(3001, () => {
    console.log("%Server is running on port 3001");
});


module.exports = app;
