import mongoose from "mongoose";

async function connectToDB() {
    try {
        mongoose.connection.on('connected', () => console.log("Database is connected"));
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectToDB;