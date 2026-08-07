const mongoose = require("mongoose");

async function connectToDB() {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to Mongo DB");
    });
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectToDB;
