"use client";
import Link from "next/link";
import { UserAuth } from "../Provider/AuthContext";
import { signOut, useSession } from "next-auth/react";
import { auth } from "../firebase";
import React from "react";

const PostsCard = ({ posts }) => {
	return (
		<div>
			{posts.length > 0 ? (
				<div className="lg:w-full w-[100vw] flex flex-col justify-center items-center">
					{posts.map((post) => {
						return (
							<div
								key={post.id}
								className="bg-[#285C4D] p-6 rounded-lg m-4 w-[80vw] lg:w-[40vw] "
							>
								<div className=" text-right m-0 text-sm font-mono mb-1">
									{post.date}
								</div>
								<div className=" text-left font-bold mb-2">{post.title}</div>
								<div className=" text-left font-thin mb-2">{post.body}</div>
							</div>
						);
					})}
				</div>
			) : (
				<div>
					<div>Cargando...</div>
				</div>
			)}
		</div>
	);
};

export default PostsCard;
