import mongoose from "mongoose";
import { ENV } from "./env.ts"

export const connectDB = async()=> {
    try {
        await mongoose.connect(ENV.DB_URI as string)
        console.log("DB connected successfully");        
    } catch (error) {
        console.log("Error connecting to DB");
        process.exit(1)
    }
}