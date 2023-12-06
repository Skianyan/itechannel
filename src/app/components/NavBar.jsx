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
				<ul className="mt-10 ">
					<Link href="/">
						<li className="flex p-1 mb-4 transition-colors duration-300 hover:bg-black hover:text-[#B38E5D] rounded-lg">
							<div className=" mr-2">
								<HomeIcon />
							</div>
							<div className="font-bold text-lg">Inicio</div>
						</li>
					</Link>

					<li className="flex m-2 font-bold">Secciones</li>
					<hr className="my-4 w-40" />
					{categoryList.map((cat, index) => {
						const categoryUrl = `/${encodeURIComponent(cat)}`; // Encode the category name
						return (
							<a
								key={index}
								className="justify-items-center transition-colors p-2 duration-300 hover:text-[#B38E5D] hover:bg-black hover:underline flex flex-col rounded-lg"
								href={categoryUrl}
							>
								{cat}
							</a>
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
					<ul className="h-full flex justify-end place-items-end mb-4">
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
