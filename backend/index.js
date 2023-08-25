import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
// import cors from 'cors';
import cors from "cors"
import { Login, Register, getCurrentUser } from './controolers/User.Controolers.js';



const app = express();
app.use(express.json())
dotenv.config();
app.use(cors())


app.get("/", (req, res) => {
    res.send("Working...")
})
app.post("/register", Register)
app.post("/login", Login)
app.post("/get-current-user",getCurrentUser )





mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB...")
})

app.listen(8000, () => {
    console.log("Listening on port 8000")
})
