// Import required modules
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

// Get the MongoDB URI and Database Name from environment variables
const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME || "defaultDB";

// Validate MongoDB URI
if (!uri) {
  console.error("❌ Error: MONGO_URI is not defined in the .env file. Please add it and try again.");
  process.exit(1);
}

// Initialize MongoDB client
const client = new MongoClient(uri);

// Variable to store the database instance
let db;

/**
 * Connect to MongoDB and initialize the database.
 */
const connectToDatabase = async () => {
  try {
    await client.connect(); // Establish a connection
    db = client.db(dbName); // Use DB_NAME from .env or fallback to "defaultDB"
    console.log("✅ MongoDB connected successfully!");
    console.log(`📂 Using database: ${dbName}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

/**
 * Get the database instance.
 * @returns {object} - The MongoDB database instance.
 * @throws Will throw an error if the database is not initialized.
 */
const getDb = () => {
  if (!db) {
    throw new Error("❌ Database not initialized. Call connectToDatabase before using the database.");
  }
  return db;
};

/**
 * Gracefully handle app termination to close the MongoDB connection.
 */
const gracefulShutdown = async () => {
  try {
    if (client) {
      await client.close(); // Close the MongoDB connection
      console.log("✅ MongoDB connection closed gracefully.");
    }
    process.exit(0);
  } catch (err) {
    console.error("❌ Error during MongoDB connection shutdown:", err.message);
    process.exit(1);
  }
};

// Handle termination signals (e.g., CTRL+C)
process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

// Connect to the database on startup
connectToDatabase();

module.exports = {
  connectToDatabase,
  getDb,
};
