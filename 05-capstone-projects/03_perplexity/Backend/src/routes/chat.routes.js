import { Router } from "express";
import {
  deleteChatById,
  getChatMessages,
  getUserChats,
  sendMessage,
} from "../controllers/chat.controller.js";
import {
  authenticationMiddleware,
  isAuthenticated,
} from "../middlewares/auth.middleware.js";

const chatRouter = Router();

chatRouter.post(
  "/message",
  authenticationMiddleware,
  isAuthenticated,
  sendMessage,
);

chatRouter.get("/", authenticationMiddleware, isAuthenticated, getUserChats);

chatRouter.get(
  "/:chatId/messages",
  authenticationMiddleware,
  isAuthenticated,
  getChatMessages,
);

chatRouter.delete(
  "/:chatId",
  authenticationMiddleware,
  isAuthenticated,
  deleteChatById,
);

export default chatRouter;
