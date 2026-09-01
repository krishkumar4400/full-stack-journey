import mongoose from "mongoose";
import env from "./env";

const connectToDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
  } catch (error) {
    console.error(error);
  }
};
export default connectToDB;
