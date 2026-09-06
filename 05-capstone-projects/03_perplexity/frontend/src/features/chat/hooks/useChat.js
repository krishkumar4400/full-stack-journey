import { initializeSocketConnection } from "../service/chat.socket.js";
import {
  sendMessage,
  getChatMessages,
  getUserChats,
  deleteChat,
} from "../service/chat.api.js";
import { useDispatch } from "react-redux";
import {
  setChats,
  setCurrentChatId,
  setError,
  setIsLoading,
  createNewChat,
  addNewMessage,
} from "../chat.slice.js";

export const useChat = () => {
  const dispatch = useDispatch();

  async function handleSendMessage({ message, chatId }) {
    setIsLoading(true);
    const data = await sendMessage({ message, chatId });
    const { chat, aiMessage } = data;
    dispatch(
      createNewChat({
        chatId: chat._id,
        title: chat.title,
      }),
    );
    dispatch(
      addNewMessage({ chatId: chat._id, content: message, role: "user" }),
    );
    dispatch(
      addNewMessage({
        chatId: chat._id,
        content: aiMessage.content,
        role: aiMessage.role,
      }),
    );
    // dispatch(
    //   setChats((prev) => {
    //     return {
    //       ...prev,
    //       [chat._id]: {
    //         ...chat,
    //         messages: [{ content: message, role: "user" }, aiMessage],
    //       },
    //     };
    //   }),
    // );

    dispatch(setCurrentChatId(chat._id));
  }

  return {
    initializeSocketConnection,
    handleSendMessage,
  };
};
