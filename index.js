const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 1. Define the directory where your main HTML file is located
// Assuming index.html is in the root directory of the project
const rootDirectory = __dirname;

// 2. IMPORTANT: Configure the 'assets' directory as a static public folder.
// This allows the browser to find all the linked files (CSS, JS, Images).
// The path in the browser will be 'http://localhost:3000/assets/...'
app.use("/assets", express.static(path.join(rootDirectory, "assets")));

// 3. Define the route for the main page (index.html)
app.get("/", (req, res) => {
  // Use res.sendFile() to send the main index.html file
  res.sendFile(path.join(rootDirectory, "index.html"), (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("index.html sent successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
