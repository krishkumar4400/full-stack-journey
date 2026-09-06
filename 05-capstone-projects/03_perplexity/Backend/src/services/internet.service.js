import { tavily } from "@tavily/core";
import "dotenv/config";

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

const searchInternet = async ({query}) => {
  const result = await tvly.search(query, {
    maxResults: 5,
    searchDepth: "basic"
  });
  
  console.log(result);
  return JSON.stringify(result);
};
export default searchInternet;
