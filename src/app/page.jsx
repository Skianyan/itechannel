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
	orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import { useRouter } from "next/navigation";
import PostsCard from "./components/PostsCard";

const Main = () => {
	const [posts, setPosts] = useState([]);
	const targetCategory = "Eventos";

	useEffect(() => {
		const collRef = collection(db, "posts");

		const subscriber = onSnapshot(
			query(
				collRef,
				orderBy("date", "asc"),
				where("category", "==", targetCategory)
			), // 'desc' for descending order, use 'asc' for ascending
			{
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
			}
		);
		return () => subscriber();
	}, []);

	return (
		<div className="h-[100vh] w-[85vw] ml-[15%] flex flex-col items-center bg-red-100">
			<div className="mt-4">Anuncios Generales</div>
			<div className="">
				<PostsCard posts={posts}></PostsCard>
			</div>
		</div>
	);
};

export default Main;
