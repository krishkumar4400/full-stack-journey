import { Router } from "express";
import { sendMessage } from "../controllers/chat.controller.js";
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

export default chatRouter;
