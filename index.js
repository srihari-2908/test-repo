const express = require("express");

const app = express();
const PORT = 3000;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Node.js App is Running! 🚀");
});

// Export app for testing
module.exports = app;

// Start server only if not in test mode
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}