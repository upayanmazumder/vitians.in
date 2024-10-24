import { initFirestore } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import dotenv from "dotenv";

dotenv.config();

// Log environment variables to verify they are correctly loaded
console.log("AUTH_FIREBASE_PROJECT_ID:", process.env.AUTH_FIREBASE_PROJECT_ID ? "Loaded" : "Not Loaded");
console.log("AUTH_FIREBASE_CLIENT_EMAIL:", process.env.AUTH_FIREBASE_CLIENT_EMAIL ? "Loaded" : "Not Loaded");
console.log("AUTH_FIREBASE_PRIVATE_KEY:", process.env.AUTH_FIREBASE_PRIVATE_KEY ? "Loaded" : "Not Loaded");

const projectId = process.env.AUTH_FIREBASE_PROJECT_ID;
const clientEmail = process.env.AUTH_FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.AUTH_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  console.error("Missing required environment variables for Firebase initialization");
  throw new Error("Missing required environment variables for Firebase initialization");
}

export const firestore = initFirestore({
  credential: cert({
    projectId,
    clientEmail,
    privateKey,
  }),
});