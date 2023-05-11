import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config()
const port: Number = 5000;

// database connection
async function main() {
  try {
    await mongoose.connect(`${process.env.DB_LOCAL}`);
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
