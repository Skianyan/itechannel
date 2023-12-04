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
		<header className="sm:w-[25%]  p-2  ">
			{/* Responsive Menu */}
			<Popover className="">
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
					enter="transition-opacity duration-75"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Popover.Panel className="bg-slate-900 absolute w-48 h-[95vh] rounded-lg p-4 mt-2">
						<ul className="text-white space-y-5 h-full flex flex-col justify-center">
							<li className="space-x-2 flex "></li>
							<li>
								<div>
									<Link href={"/"}>
										<HomeIcon /> Home
									</Link>
								</div>
							</li>
							<li className="space-x-2 flex text-aling font-bold">
								Secciones{" "}
							</li>

							{categoryList.map((cat, index) => {
								const categoryUrl = `/${encodeURIComponent(cat)}`; // Encode the category name
								return (
									<li key={index}>
										<a href={categoryUrl}>{cat}</a>
									</li>
								);
							})}
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
								<ul className="flex flex-col h-full items-center justify-end space-y-3 mb-4">
									<Link href="/signin">Login</Link>
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
