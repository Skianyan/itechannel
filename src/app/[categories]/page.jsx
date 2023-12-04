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
import { useRouter } from "next/navigation";
import PostsCard from "../components/PostsCard";
import ContInfo from "../components/ContInfo";

const page = () => {
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
		<div className="flex flex-col lg:flex-row items-stretch justify-between">
			<div className="w-full lg:w-3/4 flex flex-col bg-slate-400 text-white h-[95vh]  text-center ">
				<div className="font-bold font-serif text-2xl mt-5 lg:hidden  ">
					{" "}
					Ite-Informamos{" "}
				</div>
				<div className="mt-4">Anuncios Generales</div>
				<div className="">
					<PostsCard posts={posts}></PostsCard>
				</div>
			</div>

			<div className="hidden lg:flex lg:w-1/4 max-w-full h-[95vh]">
				<ContInfo />
			</div>
		</div>
	);
};

export default page;
