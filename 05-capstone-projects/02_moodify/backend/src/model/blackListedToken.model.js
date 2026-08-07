import mongoose from "mongoose";

const blackListedTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required"],
      unique: true,
      index: true,
    },
  },
  {
    timeseries: true,
  },
);

const blackListedTokenModel =
  mongoose.models.BlackListedToken ||
  mongoose.model("BlackListedToken", blackListedTokenSchema);

export default blackListedTokenModel;
