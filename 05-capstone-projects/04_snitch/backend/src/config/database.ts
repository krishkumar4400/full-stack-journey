import mongoose from "mongoose";
import ApiError from "../utils/api-error.js";

const connectToDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new ApiError(500, "Mongo DB connection string is missing");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongo db");
  } catch (error) {
    console.error(error);
    throw new ApiError(400, "Failed to connect with database");
  }
};

export default connectToDB;
