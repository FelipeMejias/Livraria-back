import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL; // pega a variável do Render
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('ClusterBook'); // define o database que você quer usar
    console.log('MongoDB conectado!');
    return db;
  } catch (err) {
    console.error('Erro MongoDB:', err);
    process.exit(1);
  }
}

connectDB();