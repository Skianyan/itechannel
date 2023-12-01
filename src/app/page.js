import Link from "next/link";
import React from "react";

const Main = () => {
	return (
		<div>
			<Link href={"/api/auth/signin"}>Sign In</Link>
		</div>
	);
};

export default Main;
