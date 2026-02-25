import app from "./src/app.ts";
import { connectDB } from "./src/config/db.ts";
import { ENV } from "./src/config/env.ts";


connectDB()
    .then(()=>{
        app.listen(ENV.PORT,()=>{
            console.log("Server is running on PORT: ",ENV.PORT);            
        })
    })
    .catch((error)=>{
        console.error("Failed to start server: ",error)
        process.exit(1)
    })