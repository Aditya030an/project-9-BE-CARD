import express from "express";
import dotenv from "dotenv";
import taskRouter from "./router/taskRouter.js"
import dataBaseConfig from "./config/dataBaseConfig.js";
import cors from "cors";
dotenv.config({
    path:".env",
})
const app = express();
dataBaseConfig();
app.use(express.json());
app.use(cors());
app.use("/api/v1/task" ,taskRouter )
const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>{
    console.log("Server running at port ",PORT);
});