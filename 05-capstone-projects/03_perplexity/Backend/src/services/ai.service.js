import { initChatModel } from "langchain";

const model = await initChatModel("google-genai:gemini-3.6-flash");

export const testAI = async () => {
  const response = await model.invoke("Why do parrots talk?");
  console.log(response.text);
};
