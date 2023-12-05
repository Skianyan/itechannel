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
				<div className="lg:w-full w-[95vw]">
					{posts.map((post) => {
						return (
							<div key={post.id} className="bg-slate-500 p-5 rounded-lg m-4">
								<div>Title: {post.title}</div>
								<div>Body: {post.body}</div>
								<div>Date: {post.date}</div>
								<div>Category: {post.category}</div>
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
