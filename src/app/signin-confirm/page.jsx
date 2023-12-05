"use client";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../firebase";

export default function SigninConfirm() {
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      signInWithEmailLink(auth, email ?? "", window.location.href)
        .then(async (result) => {
          await signIn("credentials", {
            user: JSON.stringify(result.user),
            redirect: true,
            callbackUrl: "/",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <div className=" bg-slate-800 h-[95vh] flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Iniciando Sesion, espere unos momentos
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  text-center text-white">
            Validando...
          </div>
        </div>
      </div>
    </>
  );
}
