"use client";

import React from "react";
import { Popover, Transition } from "@headlessui/react";
//import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
//import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useCategories } from "../Provider/CategoriesContext";
import { signOut, useSession } from "next-auth/react";
import { auth } from "../firebase";

const Menu = () => {
	const [isActive, setIsActive] = useState(false);
	const [isShowing, setIsShowing] = useState(false);
	const { data: session, status } = useSession();
	const { categoryList, updateCategories } = useCategories();
	return (
		<header className=" bg-[#D4C19C] w-full  p-2  ">
			{/* Responsive Menu */}
			<Popover className="select-none">
				<Popover.Button onClick={() => setIsShowing((isShowing) => !isShowing)}>
					{isActive ? (
						<MenuIcon
							size={30}
							onClick={() => {
								setIsActive(!isActive);
							}}
						/>
					) : (
						<MenuIcon
							size={30}
							onClick={() => {
								setIsActive(!isActive);
							}}
						/>
					)}
				</Popover.Button>

				<Transition
					show={isShowing}
					enter="transition-opacity duration-150"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Popover.Panel className="bg-[#56242A] absolute w-[70vw] h-[95vh] rounded-lg p-6 z-50">
						<ul className="text-white h-full w-[50%] flex flex-col justify-center">
							<li className="flex "></li>
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
							{session ? (
								<ul className="flex flex-col h-full justify-end">
									<li>Usuario:</li>
									<li className="mb-3">{session.user.email}</li>
									<li className="bg-[#9D2449] h-14 w-32 mb-3 rounded-lg  text-center p-4 transition-colors duration-300 hover:bg-[#B38E5D]">
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
									<li className="bg-[#9D2449] h-14 w-32 rounded-lg text-center items-center p-4 transition-colors duration-300 hover:bg-[#B38E5D]">
										<Link href="/signin">Login</Link>
									</li>
								</ul>
							)}
						</ul>
					</Popover.Panel>
				</Transition>
			</Popover>
		</header>
	);
};

export default Menu;
