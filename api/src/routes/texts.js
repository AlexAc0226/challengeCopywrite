const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const { text } = req.query;

    if(isString(text)){
        if(isPalindrome(text)){
            res.status(200).json({ text: text, palindromo: true }) 
        } else {
            res.status(200).json({ text: text })
        }
    } else {
        res.status(400).json({ error: "No text" })
    }
});

const isPalindrome = (text) => {
    const textLower = text.toLowerCase();
    const textReverse = textLower.split("").reverse().join("");
    return textLower === textReverse;
}

const isString = (text) => {
    return typeof text === "string";
}

module.exports = router;

