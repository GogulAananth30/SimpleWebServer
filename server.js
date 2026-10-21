const express = require("express");

const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
res.send("Welcome to my Node.js and Express.js Web Server!");
});

// Home route
app.get("/home", (req, res) => {
res.send("This is the Home Page.");
});

// About route
app.get("/about", (req, res) => {
res.send("This is the About Page.");
});

// Contact route
app.get("/contact", (req, res) => {
res.send("This is the Contact Page.");
});

app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
