import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri); // driver moderno já cuida do TLS

let _db;

export async function connectDB() {
  if (_db) return _db;

  try {
    await client.connect();
    _db = client.db("ClusterBook");
    console.log("MongoDB conectado!");
    return _db;
  } catch (err) {
    console.error("Erro MongoDB:", err);
    process.exit(1);
  }
}