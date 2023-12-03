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
import { FIRESTORE_DB } from "./firebase";
import { useRouter } from "next/navigation";

const Main = () => {
	const router = useRouter();
	const [posts, setPosts] = useState([]);
	const docData = {
		title: "tester0",
		body: "testbody",
		extrainfo: "image",
	};
	const addUser = async () => {
		await addDoc(collection(FIRESTORE_DB, "posts"), docData);
	};

	useEffect(() => {
		const collRef = collection(FIRESTORE_DB, "posts");
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
		<div className="h-[100vh] w-[100vw] ml-[15%] flex justify-center align-middle bg-red-100 text-red-950">
			<button onClick={addUser} className="bg-blue-400 p-2 rounded-lg h-14">
				add test
			</button>
			{posts.length > 0 ? (
				<div>
					{posts.map((post) => {
						return (
							<div key={post.id} className="m-5">
								<div>Title: {post.title}</div>
								<div>Body: {post.body}</div>
								<div>ExtraInfo: {post.extrainfo}</div>
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
