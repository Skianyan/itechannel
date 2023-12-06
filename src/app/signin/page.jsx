"use client";
import { sendSignInLinkToEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "../firebase";
import Modal from "../components/Modal";

export default function Signin({ searchParams }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const show = searchParams?.show;
  const modalText = {
    title: "Accediendo",
    body: "Se ha enviado un email a su correo"
  }

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000/signin-confirm",
    // This must be true.
    handleCodeInApp: true,
  };

  const signIn = () => {
    setLoading(true);
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ...
      });
  };

  return (
    <>
      <div className="bg-slate-800 h-[95vh] flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Iniciar Sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md p-2 border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset 
				  	focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => signIn()}
                disabled={!email}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
					hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Iniciar Sesión
              </button>
              { loading && <Modal data={modalText}/> }
            </div>
          </div>

          {/* <p className="mt-10 text-center text-sm text-gray-400">
						Not a member?{" "}
						<button
							onClick={() => router.push("signup")}
							className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
						>
							Sign Up
						</button>
					</p> */}
        </div>
      </div>
    </>
  );
}
