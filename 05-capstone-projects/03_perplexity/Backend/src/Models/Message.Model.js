import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chats",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "ai"],
  },
}, {
    timestamps: true
});

const messageModel = mongoose.model("messages", messageSchema);

export default messageModel;
