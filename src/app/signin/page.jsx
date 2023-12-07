"use client";
import { sendSignInLinkToEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "../firebase";
import Modal from "../components/Modal";

export default function Signin() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const router = useRouter();
	const modalText = {
		title: "Accediendo",
		body: "Se ha enviado un correo",
	};
	const modalEmailError = {
		title: "Error",
		body: "Introduce un correo valido",
	};

	const actionCodeSettings = {
		// URL you want to redirect back to. The domain (www.example.com) for this
		// URL must be in the authorized domains list in the Firebase Console.
		url: "http://localhost:3000/signin-confirm",
		// This must be true.
		handleCodeInApp: true,
	};

	const closeModal = () => {
		setError(false);
		setLoading(false);
		router.replace("/signin");
	};
	const signIn = async () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError(true);
			return;
		}
		setLoading(true);
		await sendSignInLinkToEmail(auth, email, actionCodeSettings)
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
		<div className="h-screen flex flex-1 flex-col text-white  justify-center items-center lg:ml-[20vw]">
			<div className="bg-[#56242A] px-6 py-12 lg:px-8 rounded-lg border-[#B38E5D] border-2 w-[500px]">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight  ">
						Iniciar Sesión
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<div className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 "
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
									className="block w-full rounded-md p-2 border border-black bg-white/5 py-1.5 
                    shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 
                    sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<button
								onClick={() => signIn()}
								disabled={!email}
								className="disabled:opacity-40 flex w-full justify-center rounded-md bg-[#9D2449] px-3 py-1.5 text-sm 
                font-semibold leading-6 text-white shadow-sm transition-colors duration-300 hover:bg-[#B38E5D]"
							>
								Iniciar Sesión
							</button>
							{error ? (
								<Modal data={modalEmailError} onClose={closeModal} />
							) : (
								loading && <Modal data={modalText} onClose={closeModal} />
							)}
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
		</div>
	);
}
