import chatModel from "../Models/Chat.Model.js";
import messageModel from "../Models/Message.Model.js";
import { generateChatTitle, generateResponse } from "../services/ai.service.js";

const sendMessage = async (req, res) => {
  const { message, chatId } = req.body;

  try {
    let chatTitle = null;
    let chat = null;
    if (!chatId) {
      chatTitle = await generateChatTitle(message);
      chat = await chatModel.create({
        userId: req.userId,
        title: chatTitle,
      });
    }

    const userMessage = await messageModel.create({
      chatId: chatId || chat?._id,
      content: message,
      role: "user",
    });

    const messages = await messageModel.find({ chatId: chat?._id || chatId });
    console.log(messages);

    const aiResponse = await generateResponse(messages);

    const aiMessage = await messageModel.create({
      chatId: chat?._id || chatId,
      content: aiResponse,
      role: "ai",
    });

    return res.status(201).json({
      title: chatTitle,
      chat,
      aiMessage,
    });
  } catch (error) {
    console.error(error);
  }
};

const getUserChats = async (req, res) => {
  try {
    const chats = await chatModel.find({ userId: req.userId });
    return res.status(200).json({
      message: "Chat retrived successfully",
      success: true,
      chats,
    });
  } catch (error) {
    console.error(error);
  }
};

const getChatMessages = async (req, res) => {
  const { chatId } = req.params;

  const chat = await chatModel.findOne({ _id: chatId, userId: req.userId });

  if (!chat) {
    return res.status(404).json({
      message: "chat not found",
      success: false,
    });
  }

  const messages = await messageModel.find({ chatId });

  return res.status(200).json({
    message: "Messages retrieved successfully",
    success: true,
    messages,
  });
};

const deleteChatById = async (req, res) => {
  try {
    const { chatId } = req.params;

    const chat = await chatModel.findOneAndDelete({
      _id: chatId,
      userId: req.userId,
    });

    await messageModel.deleteMany({ chatId });

    if (!chat) {
      return res.status(404).json({
        message: "Chat not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Chat deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export { sendMessage, getUserChats, getChatMessages, deleteChatById };
