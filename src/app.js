const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "")));

// Render UI
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "", "./index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Welcome UI running at http://localhost:${port}`);
});