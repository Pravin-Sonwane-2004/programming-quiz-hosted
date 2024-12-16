const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME || "defaultDB";

if (!uri) {
  console.error("❌ Error: MONGO_URI is not defined in the .env file. Please add it and try again.");
  process.exit(1);
}

const client = new MongoClient(uri, {
  tls: true,               // Enable TLS
  tlsAllowInvalidCertificates: false, // Ensure certificates are valid
});

let db;

const connectToDatabase = async () => {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("✅ yey 😎😎😎 MongoDB connected successfully!");
    console.log(`📂 Using database: ${dbName}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

const getDb = () => {
  if (!db) {
    throw new Error("❌ Database not initialized. Call connectToDatabase before using the database.");
  }
  return db;
};

const gracefulShutdown = async () => {
  try {
    if (client) {
      await client.close();
      console.log("✅ 😊😊😊 MongoDB connection closed.");
    }
    process.exit(0);
  } catch (err) {
    console.error("❌ Error during MongoDB connection shutdown:", err.message);
    process.exit(1);
  }
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

connectToDatabase();

module.exports = {
  connectToDatabase,
  getDb,
};
