import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);

export let db;

export async function connectDB() {
  if (!db) {
    await mongoClient.connect();
    db = mongoClient.db(process.env.BANCO);
    console.log("Mongo conectado 🚀");
  }
  return db;
}