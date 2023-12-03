"use client";
import React from "react";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className="bg-slate-400 absolute w-[15%] h-full">
			<ul className="flex flex-col items-center space-y-10 mt-10">
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/signin"}>Login</Link>
				</li>
				<li>
					<Link href={"/dashboard"}>Dashboard</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
