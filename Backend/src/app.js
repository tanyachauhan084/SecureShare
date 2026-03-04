import express from "express";
import cors from "cors"

const app= express();

app.use(express.json({limit:"16kb"}));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true, limit:"16kb"}));

app.use(cors({

    origin:"http://localhost:5173/",
    credentials:true,
    methods:["GET", "POST", "UPDATE", "PUT", "PATCH"],
    allowedHeaders: ["Authorization", "Content-Type"]
}))


export default app;

