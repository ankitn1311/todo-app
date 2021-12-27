const mongoose = require("mongoose");
const connectToDatabase = async () => {
  const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
  const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.aepcj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to database");
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

connectToDatabase();
