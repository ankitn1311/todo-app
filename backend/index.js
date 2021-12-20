const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
require("./database");

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors())
app.use(express.json());

app.use("/api/", authRoute);
app.use("/api/", userRoute);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
