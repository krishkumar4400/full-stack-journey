import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    posterUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      enum: {
        values: ["sad", "happy", "surprised", "angry", "normal"]
      },
      default: "normal"
    },
  },
  {
    timestamps: true,
  },
);

const songModel = mongoose.model("Songs", songSchema);
export default songModel;
