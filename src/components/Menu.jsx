"use client";

import React from "react";
import { Popover, Transition } from "@headlessui/react";
//import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
//import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useState } from "react";
import CircleIcon from '@mui/icons-material/Circle';

const Menu = () => {
	const [isActive, setIsActive] = useState(false);
	const [isShowing, setIsShowing] = useState(false);
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
					<Popover.Panel className="bg-slate-900 absolute w-15 h-full rounded-lg p-4 mt-2">
						<ul className="text-white space-y-5  justify-center">
							<li className="space-x-2 flex ">
								
								
							</li>
                            <li className="space-x-2 flex text-aling font-bold">Secciones </li>

							<li className="space-x-2 flex">
							
								<div>
									<Link href={"/deportes"}><CircleIcon/> Deportes</Link>
								</div>
							</li>

							<li className="space-x-2 flex">
								<div>
									<AssignmentIcon  />
								</div>
								<div>
									<Link href={"/eventos"}> Eventos</Link>
								</div>
                                
							</li>

                            <li>
                            <div>
									<Link href={"/"}><HomeIcon /> Home</Link>
								</div>
                            </li>
							
						</ul>
					</Popover.Panel>
				</Transition>
			</Popover>
			
		</header>
	);
};

export default Menu;