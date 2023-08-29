import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.ATLAS_URI || ""

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
    console.log(`Successfully connected to database`)
} catch (e) {
    console.log(e)
}

let db = conn.db("todo");

export default db;

