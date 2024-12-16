// database/connection.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME || "defaultDB";

const client = new MongoClient(uri);
let db;

const connectToDatabase = async () => {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("✅ MongoDB connected successfully!");
    console.log(`📂 Using database: ${dbName}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = { connectToDatabase, db };
