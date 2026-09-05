import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/api/v1/chats/api/v1/chats`,
  withCredentials: true,
});

const sendMessage = async ({ message, chatId }) => {
  try {
    const { data } = await api.post("/message", {
      message,
      chatId,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getUserChats = async () => {
  try {
    const { data } = await api.get("/");
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getChatMessages = async (chatId) => {
  try {
    const { data } = await api.get(`/${chatId}/messages`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const deleteChat = async (chatId) => {
  try {
    const { data } = await api.delete(`/${chatId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { sendMessage, getUserChats, getChatMessages, deleteChat };
