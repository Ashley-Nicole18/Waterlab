
import express from "express";

const app = express();

const PORT = Number(process.env.PORT ?? 3000);
const HOST = process.env.HOST ?? "127.0.0.1";

// Middleware for parsing JSON request bodies
app.use(express.json());

// Health-check endpoint
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "waterlab-api",
    message: "WaterLab API is running!"
  });
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`WaterLab API running at http://${HOST}:${PORT}`);
});
