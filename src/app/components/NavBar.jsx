"use client";
import React from "react";
import Link from "next/link";
import { UserAuth } from "../Provider/AuthContext";
import { signOut, useSession } from "next-auth/react";
import { auth } from "../firebase";

const NavBar = () => {
	const { data: session, status } = useSession();
	//const { user } = UserAuth();
	return (
		<div className="bg-slate-400 absolute w-[15%] h-full">
			<ul className="flex flex-col items-center space-y-10 mt-10">
				{session ? (
					<div>
						<ul className="flex flex-col space-y-3">
							<li>
								{console.log(session)}
								{session.user.email}
							</li>
							<li className="bg-red-300 h-14 w-32 rounded-lg self-center text-center p-4">
								<Link href={"/dashboard"}>Dashboard</Link>
							</li>
							<button
								className="bg-red-300 h-14 w-32 rounded-lg self-center"
								onClick={() => signOut()}
							>
								Logout
							</button>
						</ul>
					</div>
				) : (
					<div>No</div>
				)}
				<li>
					<Link href={"/"}>Home</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
