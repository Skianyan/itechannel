"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../Provider/AuthContext";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
	// const { user } = useAuth();
	return (
		<div className="bg-slate-400 absolute w-[15%] h-full">
			<ul className="flex flex-col items-center space-y-10 mt-10">
				<li>
					<Link href={"/"}>Home</Link>
				</li>

				<li>
					<Link href={"/dashboard"}>Dashboard</Link>
				</li>
				<button
					className="bg-red-300 h-14 w-32 rounded-lg self-center"
					onClick={() => signOut()}
				>
					Logout
				</button>
				{/* {user ? (
					<p>
						<button
							className="bg-red-300 h-14 w-32 rounded-lg self-center"
							onClick={() => signOut()}
						>
							Logout
						</button>
					</p>
				) : (
					<li>
						<Link href={"/signin"}>Login</Link>
					</li>
				)}
				{useAuth} */}
			</ul>
		</div>
	);
};

export default NavBar;
