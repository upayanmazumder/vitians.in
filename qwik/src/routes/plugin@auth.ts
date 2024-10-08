import { QwikAuth$ } from "@auth/qwik";
import Google from "@auth/qwik/providers/google";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Google({
        authorization: {
          params: {
            hd: 'vitstudent.ac.in', // restrict to VIT students
          },
        },
      }),
    ],
    pages: {
      signIn: "/a/signin/",
      signOut: "/a/signout/",
    },
  }),
);
