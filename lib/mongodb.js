
// import { MongoClient } from 'mongodb';

// const uri = process.env.mongodb_uri;
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.mongodb_uri) {
//   throw new Error('يرجى تحديد mongodb_uri في ملف .env.local');
// }

// client = new MongoClient(uri, options);
// clientPromise = client.connect();

// export async function connectToDatabase() {
//   const client = await clientPromise;
//   const db = client.db();
   
//   return { db, client };
// }



// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // الاسم يجب أن يطابق Vercel
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("MongoDB URI not defined in environment variables");
}

if (process.env.NODE_ENV === "development") {
  // في التطوير نستخدم نسخة واحدة لتجنب إعادة الاتصال المستمر
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // في الإنتاج
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
