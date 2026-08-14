import "dotenv/config";
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "langchain";
import { sendMail } from "./mail.service.js";
import { tool, createAgent } from "langchain";
import * as z from "zod";

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  temperature: 0,
});

const emailTool = tool(sendMail, {
  name: "email-tool",
  description:
    "Use this tool to send an email. The input should be an object with the following properties: to (the recipient's email address)",
  schema: z.object({
    to: z.string().email().describe("The recipient's email address"),
    html: z.string().describe("The HTML content of the email"),
    subject: z.string().describe("The subject of the email"),
  }),
});

const agent = createAgent({
  model,
  tools: [emailTool],
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = [];

while (true) {
  const userInput = await rl.question("You: ");
  messages.push(new HumanMessage(userInput));
  const response = await agent.invoke({ messages });
  messages.push(response.messages[response.messages.length - 1]);
  console.log(response);
}
