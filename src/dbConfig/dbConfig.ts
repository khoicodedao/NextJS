import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://khoi:oJ5LzWU0oeaQnrDf@cluster0.ii8oew6.mongodb.net/"
    );
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo DB connected successfully!");
    });
    connection.on("error", () => {
      console.log("MongoDB connection error.");
      process.exit();
    });
  } catch (error) {
    console.log("Connect error!");
  }
}
