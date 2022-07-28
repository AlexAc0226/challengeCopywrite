const express = require('express');
const router = express.Router();

router.use("/iecho", require("./texts"));

module.exports = router;