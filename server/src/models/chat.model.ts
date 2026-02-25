import mongoose, { Document, Schema } from "mongoose";

export interface IChat extends Document{
    participants: mongoose.Types.ObjectId[],
    lastMessage?: mongoose.Types.ObjectId,
    lastMessageAt?: Date,
    createdAt: Date,
    updatedAt: Date
}

const ChatSchema = new mongoose.Schema<IChat>({
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message",
        default: true
    },
    lastMessageAt: {
        type: Date,
        default: Date.now()
    },    
},{timestamps: true})

export const Chat = mongoose.model("Chat",ChatSchema)