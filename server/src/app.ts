import express from "express"
import { ENV } from "./config/env.ts"
import { connectDB } from "./config/db.ts"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/health",(req,res)=>{
    res.send("VibeVerse always works...")
})

export default app