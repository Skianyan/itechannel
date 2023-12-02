"use client";
import React from "react";
import Link from "next/link";
import addUser from "./helpers/addUser";

const Main = () => {

	return (
		<div className="flex flex-col">
			<button onClick={addUser}>add test</button>
			<Link href={"/login"}>log in</Link>
		</div>
	);
};

export default Main;
