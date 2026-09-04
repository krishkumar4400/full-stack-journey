import { initChatModel } from "langchain";
import { HumanMessage, SystemMessage, AIMessage } from "langchain";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatGoogle } from "@langchain/google";

const mistralModel = new ChatMistralAI({
  model: "mistral-small-latest",
  temperature: 0,
  maxRetries: 2,
});

const model = new ChatGoogle("gemini-3.6-flash");

const geminiModel = await initChatModel("google-genai:gemini-3.6-flash");

const generateResponse = async (messages) => {
  const response = await geminiModel.invoke(
    messages.map((msg) => {
      if (msg.role === "ai") {
        return new AIMessage(msg.content);
      } else if (msg.role === "user") {
        return new HumanMessage(msg.content);
      }
    }),
  );

  return response.text;
};

const generateChatTitle = async (message) => {
  const response = await model.invoke([
    new SystemMessage(
      `You are a helpful assistant that generates concise and descriptive titles for chat conversation.
      
      User will provide a message, and you will generate a title for the chat conversation based on the content of the message. The title should be concise, descriptive, and relevant to the message provided. Please provide only the title without any additional text or explanation.
      `,
    ),
    new HumanMessage(
      `Generate a title for the following first message: "${message}"`,
    ),
  ]);

  return response.text;
};

export { generateResponse, generateChatTitle };
