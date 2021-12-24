const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const todoRoute = require("./routes/todo");
require("./database");

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

app.use("/api/", authRoute);
app.use("/api/", userRoute);
app.use("/api/", todoRoute);

const server = app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
