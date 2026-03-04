import express from "express";
import healthcheck from "../controllers/healthcheck.controller.js";

const Route= express.Router();

Route.get("/", healthcheck);

export default Route;