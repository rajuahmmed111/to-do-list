import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Define cache interface for global scope
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Ensure global.mongoose is properly typed
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

// Create a cache object in the global scope to prevent multiple connections
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn; // Return existing connection if available
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // Ensure mongoose.connect returns the correct type
    cached.promise = mongoose.connect(MONGODB_URI as string, opts);
  }

  try {
    cached.conn = await cached.promise; // Await and store connection
  } catch (e) {
    cached.promise = null; // Reset cache if connection fails
    throw e; // Propagate error
  }

  return cached.conn; // Return the mongoose instance
}
