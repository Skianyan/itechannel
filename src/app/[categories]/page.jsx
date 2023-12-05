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
import { db } from "../firebase";
import { useRouter } from "next/router";
import PostsCard from "../components/PostsCard";
import ContInfo from "../components/ContInfo";

const page = ({ params: { categories } }) => {
	const [posts, setPosts] = useState([]);
	const targetCategory = categories;

	useEffect(() => {
		const collRef = collection(db, "posts");

		const subscriber = onSnapshot(
			query(
				collRef,

				where("category", "==", targetCategory),
				orderBy("date", "desc")
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
					console.log();
				},
			}
		);
		return () => subscriber();
	}, []);
	return (
		<div className="flex flex-col lg:flex-row items-stretch justify-between">
			<div className="w-full lg:ml-[20vw] lg:h-[100vh] lg:w-50 h-full flex flex-col bg-slate-400 text-white text-center">
				<div className="font-bold font-serif text-2xl mt-5 lg:hidden  ">
					{" "}
					Ite-Informamos{" "}
				</div>
				<div className="mt-4">{targetCategory}</div>
				<div className="overflow-auto h-[100vh] ">
					<PostsCard posts={posts}></PostsCard>
				</div>
			</div>

			<div className="hidden lg:flex lg:w-3/10 max-w-full h-[100vh]">
				<ContInfo />
			</div>
		</div>
	);
};

export default page;
