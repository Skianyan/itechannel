"use client";
import { addDoc, collection } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FIRESTORE_DB } from "../firebase";

export default function Dashboard() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [isValid, setIsValid] = useState({
		title: true,
		body: true,
	});
	const session = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/signin");
		},
	});

	const addPost = async () => {
		let dateObj = new Date();
		let month = dateObj.getUTCMonth() + 1; //months from 1-12
		let day = dateObj.getUTCDate();
		let year = dateObj.getUTCFullYear();
		let newdate = year + "/" + month + "/" + day;

		const user = await addDoc(collection(FIRESTORE_DB, "posts"), {
			createdby: session?.data?.user?.email,
			date: newdate,
			title: title,
			body: body,
		});
		console.log(user);
		alert("post added successfully");
	};

	const validateForm = () => {
		setIsValid({
			["title"]: false,
			["email"]: false,
			["body"]: false,
		});

		if (title.length > 4) {
			setIsValid({
				...isValid,
				["title"]: true,
			});
		}
		if (body.length > 5) {
			setIsValid({
				...isValid,
				["body"]: true,
			});
		}

		if (isValid.title && isValid.body) addPost();
		console.log("first");
	};

	return (
		<div className="h-[100vh] w-[85vw] ml-[15%] flex flex-col">
			<div className="">{session?.data?.user?.email}</div>
			<button
				onClick={addPost}
				className="bg-blue-400 p-2 rounded-lg h-14 w-32"
			>
				add test
			</button>
			<div className="bg-slate-500 p-4 flex flex-col self-center items-center w-96 rounded-lg ">
				<div>Registrar nuevo post</div>
				<div className="flex flex-col w-80">
					<div>Titulo del Anuncio</div>

					<input
						className="mb-3 p-2"
						placeholder="Titulo de el Anuncio"
						placeholderTextColor={"#cbcbcb"}
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
					{!isValid.title && <div>Please enter a valid title</div>}

					<div>Cuerpo del Anuncio</div>
					<textarea
						className="mb-3 pb-10 p-2"
						placeholder="Cuerpo"
						placeholderTextColor={"#cbcbcb"}
						onChange={(e) => setBody(e.target.value)}
						value={body}
					/>
					{!isValid.body && <div>Please enter a valid body</div>}
					<button
						className="bg-red-300 p-3 rounded-lg"
						onClick={validateForm}
						title="Add Post"
						disabled={title === ""}
					>
						Add Post
					</button>
				</div>
			</div>
		</div>
	);
}

Dashboard.requireAuth = true;
