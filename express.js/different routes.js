
const express = require("express");
const app = express();

const hostname = "localhost";
const PORT = 5000;

let counter = 0;

app.get("/", (req, res) => {
    res.json({ msg:" ia am homepage" });
});

app.get("/about", (req, res) => {
    counter++;
    res.json({ msg:"i am about page" });
});

app.get("/contact", (req, res) => {
    counter--;
    res.json({ email :"support@pwskills.com" });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${hostname}:${PORT}`);
});
