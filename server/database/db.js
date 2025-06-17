
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

const Connection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD); // Important if password contains special chars

  const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.jyvlm4m.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Error while connecting with the database:", error);
  }
};

export default Connection;
