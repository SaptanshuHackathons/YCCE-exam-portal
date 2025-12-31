import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not set");
        }

        const connectionString = `${process.env.MONGO_URI}${DB_NAME}`;
        console.log("Connecting to MongoDB");

        const connectionInstance = await mongoose.connect(connectionString);
        console.log("Database connected successfully:", connectionInstance.connection.name);
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

export default connectDB;