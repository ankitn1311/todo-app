const express = require("express");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
require("dotenv").config();
require("./database");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/", authRoute);
app.use("/api/", userRoute);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
