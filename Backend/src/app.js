import express from "express";
import cors from "cors"
import healthcheckRoute from "./routes/healthcheck.route.js";
import errorMiddleware from "./middlewares/error_middleware.js";

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

//mounted router middlewae on a path//

app.use("/healthcheck", healthcheckRoute);


//added this for a proper response in the postman
app.use(errorMiddleware);

export default app;

