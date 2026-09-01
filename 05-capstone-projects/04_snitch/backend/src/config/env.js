import "dotenv/config";

const env = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
};

export default env;
