import { initFirestore } from "@auth/firebase-adapter";
import { applicationDefault } from "firebase-admin/app";

export const firestore = initFirestore({
  credential: applicationDefault(),
});
