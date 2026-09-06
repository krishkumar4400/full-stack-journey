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
  addMessages
} from "../chat.slice.js";

export const useChat = () => {
  const dispatch = useDispatch();

  async function handleSendMessage({ message, chatId }) {
    setIsLoading(true);
    const data = await sendMessage({ message, chatId });
    const { chat, aiMessage } = data;
    if(!chatId) {
      dispatch(
        createNewChat({
          chatId: chat._id,
          title: chat.title,
        }),
      );
    }
    dispatch(
      addNewMessage({ chatId: chatId || chat._id, content: message, role: "user" }),
    );
    dispatch(
      addNewMessage({
        chatId: chatId || chat._id,
        content: aiMessage.content,
        role: aiMessage.role,
      }),
    );
    dispatch(setCurrentChatId(chat._id));
  }

  const handleGetChats = async () => {
    dispatch(setIsLoading(true));
    const data = await getUserChats();
    const { chats } = data;
    dispatch(
      setChats(
        chats.reduce((acc, chat) => {
          acc[chat._id] = {
            id: chat._id,
            title: chat.title,
            messages: [],
            lastUpdated: chat.updatedAt,
          };
          return acc;
        }, {}),
      ),
    );
    dispatch(setIsLoading(false));
  };

  const handleOpenChat = async (chatId, chats) => {
    console.log(chats[chatId]?.messages.length);
    if(chats[chatId]?.messages.length === 0) {
      const data = await getChatMessages(chatId);
      const { messages } = data;
      const formattedMessages = messages.map((msg) => ({
        content: msg.content,
        role: msg.role,
      }));
      dispatch(
        addMessages({
          chatId,
          messages: formattedMessages,
        }),
      );
    }
    dispatch(setCurrentChatId(chatId));
  };

  return {
    initializeSocketConnection,
    handleSendMessage,
    handleGetChats,
    handleOpenChat,
  };
};
