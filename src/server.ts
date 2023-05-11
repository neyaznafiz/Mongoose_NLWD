import mongoose from "mongoose";
import app from "./app";

const port : Number = 5000;

// database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-nlwd");
    console.log("🔸 Database connection established...");

    //   run the server
    app.listen(port, () => {
      console.log(`🔸 Server is listening on port ${port}`);
    });
  } catch (err) {
    console.error("🔻 Failed to connect Database");
  }
}
main();
