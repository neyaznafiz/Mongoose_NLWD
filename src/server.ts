const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-nlwd");
  console.log("🔸 Database connection established...");
  } catch (err) {
    console.error('Failed to connect Database');
  }
}
main();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`🔸 Server is listening on port ${port}`);
});
