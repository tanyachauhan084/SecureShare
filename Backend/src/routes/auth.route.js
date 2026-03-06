import express from "express";
import { registerUser } from "../controllers/auth.controller.js";

const route= express.Router();

route.post("/signup", registerUser);


export default route;