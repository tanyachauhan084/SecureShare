import express from "express";
import healthcheck from "../controllers/healthcheck.controller.js";

const Route= express.Router();

Route.get("/", healthcheck); // This is a route handler, router is like a middleware itself//

export default Route;