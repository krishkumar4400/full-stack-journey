import mongoose from "mongoose";
import env from "./env.js";
import ApiError from "../utils/api-error.js";

const connectToDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Failed to connect with database", error);
  }
};
export default connectToDB;
