const express = require("express");

const app = express();
const PORT = 3000;

// Parse HTML form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static("public"));

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

// Process contact form
app.post("/submit", (req, res) => {
    const name = escapeHTML(req.body.name || "");
    const email = escapeHTML(req.body.email || "");
    const message = escapeHTML(req.body.message || "");

    const page = [
        "<!DOCTYPE html>",
        "<html lang='en'>",
        "<head>",
        "<meta charset='UTF-8'>",
        "<title>Form Submission</title>",
        "</head>",
        "<body>",
        "<h1>Form Submitted Successfully!</h1>",
        "<h2>Submitted Details</h2>",
        "<p><strong>Name:</strong> " + name + "</p>",
        "<p><strong>Email:</strong> " + email + "</p>",
        "<p><strong>Message:</strong> " + message + "</p>",
        "<br>",
        "<a href='/'>Back to Home</a>",
        "</body>",
        "</html>"
    ].join("");

    res.send(page);
});

// Escape special HTML characters
function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Start server
app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});
