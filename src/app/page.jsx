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
import ContInfo from "./components/ContInfo";

const Main = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const collRef = collection(db, "posts");

		const subscriber = onSnapshot(
			query(collRef, orderBy("date", "desc")), // 'desc' for descending order, use 'asc' for ascending
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
		<div className="flex flex-col lg:flex-row items-stretch justify-between">
			<div className="w-full lg:ml-[20vw] lg:h-[100vh] lg:w-50 h-full flex flex-col bg-[#f8f9fa] text-white text-center">
				<div className="font-bold font-serif text-2xl mt-5 text-[#706f6f] lg:hidden">
					{" "}
					Ite-Informamos{" "}
				</div>
				<div className="mt-10 mb-6 text-[#706f6f] font-semibold text-xl">
					Anuncios Generales
				</div>
				<div className="h-[100vh] custom-scrollbar">
					<PostsCard posts={posts}></PostsCard>
				</div>
			</div>

			<div className="hidden lg:flex lg:w-3/10 max-w-full h-[100vh]">
				<ContInfo />
			</div>
		</div>
	);
};

export default Main;
