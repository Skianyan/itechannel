"use client";
import React from "react";
import Link from "next/link";
import { useCategories } from "../Provider/CategoriesContext";
import { signOut, useSession } from "next-auth/react";
import { auth } from "../firebase";

const NavBar = () => {
	const { data: session, status } = useSession();
	const { categoryList, updateCategories } = useCategories();

	return (
		<div className="bg-slate-400 absolute w-[15%] h-[100%]">
			<ul className="flex flex-col items-center h-full">
				<ul className="mt-10 space-y-4">
					<li>
						<Link href="/">Home</Link>
					</li>
					{categoryList.map((cat, index) => {
						const categoryUrl = `/${encodeURIComponent(cat)}`; // Encode the category name
						return (
							<div key={index}>
								<a href={categoryUrl}>{cat}</a>
							</div>
						);
					})}
				</ul>
				{session ? (
					<ul className="flex flex-col h-full items-center justify-end space-y-3 mb-4">
						<li>{session.user.email}</li>
						<li className="bg-red-300 h-14 w-32 rounded-lg self-center text-center p-4">
							<Link href="/dashboard">Dashboard</Link>
						</li>
						<button
							className="bg-red-300 h-14 w-32 rounded-lg self-center"
							onClick={() => signOut()}
						>
							Logout
						</button>
					</ul>
				) : (
					<div className="flex flex-col h-full items-center justify-end space-y-3 mb-4">
						<Link href="/signin">Login</Link>
					</div>
				)}
			</ul>
		</div>
	);
};

export default NavBar;
