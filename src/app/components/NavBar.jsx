"use client";
import React from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { useCategories } from "../Provider/CategoriesContext";
import { signOut, useSession } from "next-auth/react";
import { auth } from "../firebase";

const NavBar = () => {
	const { data: session, status } = useSession();
	const { categoryList, updateCategories } = useCategories();

	return (
		<div className="bg-[#56242A] absolute w-[20%] h-[100%] text-white select-none">
			<ul className="flex flex-col items-center h-full">
				<ul className="mt-10 space-y-4">
					<li className="flex">
						<div className=" mr-2">
							<HomeIcon />
						</div>
						<div className="transition-colors duration-300 hover:text-[#B38E5D]">
							<Link href="/">Home</Link>
						</div>
					</li>
					<li className="space-x-2 flex text-aling font-bold">Secciones</li>
					<hr className="mt-5 w-40" />
					{categoryList.map((cat, index) => {
						const categoryUrl = `/${encodeURIComponent(cat)}`; // Encode the category name
						return (
							<div
								key={index}
								className="transition-colors duration-300 hover:text-[#B38E5D]"
							>
								<a href={categoryUrl}>{cat}</a>
							</div>
						);
					})}
				</ul>
				{session ? (
					<ul className="flex flex-col ml-[2vw] h-[100vh] justify-end mb-4">
						<li>Usuario:</li>
						<li className="mb-3">{session.user.email}</li>
						<li className="bg-[#9D2449] h-14 w-32 rounded-lg text-center mb-3 p-4 transition-colors duration-300 hover:bg-[#B38E5D]">
							<Link href="/dashboard">Dashboard</Link>
						</li>
						<button
							className="bg-[#9D2449] h-14 w-32 rounded-lg transition-colors duration-300 hover:bg-[#B38E5D]"
							onClick={() => signOut()}
						>
							Logout
						</button>
					</ul>
				) : (
					<ul className="h-full flex justify-end place-items-end">
						<li className="bg-[#9D2449] h-14 w-32 mb-3 rounded-lg text-center items-center p-4 transition-colors duration-300 hover:bg-[#B38E5D]">
							<Link href="/signin">Login</Link>
						</li>
					</ul>
				)}
			</ul>
		</div>
	);
};

export default NavBar;
