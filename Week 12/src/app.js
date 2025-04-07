import express from "express";

const app = express();

// importing routes
import healthCheckRouter from "./routes/healthcheck.route.js";

app.use("/api/v1/healthcheck", healthCheckRouter);

export default app;
