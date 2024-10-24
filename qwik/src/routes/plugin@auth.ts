import { QwikAuth$ } from "@auth/qwik";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "../lib/firestore";
import Google from "@auth/qwik/providers/google";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Google({
        // authorization: {
        //   params: {
        //     hd: 'vitstudent.ac.in', // restrict to VIT students
        //   },
        // },
      }),
    ],
    adapter: FirestoreAdapter(firestore),
    pages: {
      signIn: "/a/signin/",
      signOut: "/a/signout/",
    },
  }),
);