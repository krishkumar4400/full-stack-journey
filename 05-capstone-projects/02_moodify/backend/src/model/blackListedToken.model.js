import mongoose, { model, models, Schema } from "mongoose";

const blackListedTokenSchema = new Schema(
  {
    token: {
      type: String,
    },
  },
  {
    timeseries: true,
  },
);

const blackListedTokenModel =
  models.BlackListedToken || model("BlackListedToken", blackListedTokenSchema);

export default blackListedTokenModel;
