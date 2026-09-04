import { initChatModel } from "langchain";
import { HumanMessage } from "langchain";

const model = await initChatModel("google-genai:gemini-3.6-flash");

const generateResponse = async (message) => {
  const response = await model.invoke([new HumanMessage(message)]);

  return response.text;
};

export default generateResponse;
