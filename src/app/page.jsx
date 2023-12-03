"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	setDoc,
	doc,
	addDoc,
	collection,
	query,
	where,
	getDocs,
	onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { useRouter } from "next/navigation";

const Main = () => {
	const router = useRouter();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const collRef = collection(db, "posts");
		const subscriber = onSnapshot(collRef, {
			next: (snapshot) => {
				const posts = [];
				snapshot.docs.forEach((doc) => {
					posts.push({
						id: doc.id,
						...doc.data(),
					});
				});
				setPosts(posts);
				//console.log(users);
			},
		});
		return () => subscriber();
	}, []);

	return (
		<div className="h-[100vh] w-[85vw] ml-[15%] flex justify-center align-middle bg-red-100 text-red-950">
			{posts.length > 0 ? (
				<div>
					{posts.map((post) => {
						return (
							<div key={post.id} className="m-5">
								<div>Title: {post.title}</div>
								<div>Body: {post.body}</div>
								<div>Date: {post.date}</div>
							</div>
						);
					})}
				</div>
			) : (
				<div>
					<div>Add new contacts</div>
				</div>
			)}
		</div>
	);
};

export default Main;
