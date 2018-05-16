//This file is the starting point for the application

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello world haha"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
