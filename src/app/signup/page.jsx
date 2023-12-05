"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordAgain, setPasswordAgain] = useState("");

	const signup = async () => {
		// List of Emails that can sign up
		const approvedEmails = [
			"ricardo@haroware.com",
			"alc17760295@ite.edu.mx",
			"skianyan@gmail.com",
			"al20760365@ite.edu.mx",
		];

		// Basic email regex
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			alert("Invalid email format");
			return;
		}
		// Validate if email is in list of approved emails
		if (!approvedEmails.includes(email)) {
			alert("Email not valid!");
			return;
			// Additional registration logic can be added here
		}
		// Validate password length
		if (password.length < 6) {
			alert("Password must be at least 6 characters long");
			return;
		}

		// Validate if password and repeat password match
		if (password !== passwordAgain) {
			alert("Passwords do not match");
			return;
		}
		try {
			// Create user with email and password
			await createUserWithEmailAndPassword(auth, email, password);

			// If signup is successful, navigate to the homepage
		} catch (error) {
			// Handle signup failure
			alert(`Signup failed: ${error.message}`);
		}
	};

	return (
		<>
			<div className="bg-slate-800 h-[95vh] flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
						Sign up
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<div className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-white"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									onChange={(e) => setEmail(e.target.value)}
									required
									className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-white"
								>
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									onChange={(e) => setPassword(e.target.value)}
									required
									className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-white"
								>
									Password Again
								</label>
							</div>
							<div className="mt-2">
								<input
									id="passwordAgain"
									name="passwordAgain"
									type="password"
									autoComplete="current-password"
									onChange={(e) => setPasswordAgain(e.target.value)}
									required
									className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								disabled={
									!email ||
									!password ||
									!passwordAgain ||
									password !== passwordAgain
								}
								onClick={() => signup()}
								className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
