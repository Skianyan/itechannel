"use client";
import { addDoc, collection } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { db } from "../firebase";
import Dropdown from "../components/Dropdown";

export default function Dashboard() {
	const [category, setCategory] = useState("");
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

		const user = await addDoc(collection(db, "posts"), {
			createdby: session?.data?.user?.email,
			date: newdate,
			title: title,
			body: body,
			category: category,
		});

		alert("post added successfully");
	};

	const validateForm = () => {
		setIsValid({
			["title"]: false,
			["email"]: false,
			["body"]: false,
			["category"]: false,
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
		if (category !== "") {
			setIsValid({
				...isValid,
				["category"]: true,
			});
		}

		if (isValid.title && isValid.body && isValid.category) addPost();
		//console.log("first");
	};
	//<div className="">{session?.data?.user?.email}</div>
	return (
		<div className="flex flex-col lg:flex-row items-stretch justify-between">
			<div className="w-full flex flex-col lg:ml-[20vw] bg-[#f8f9fa] text-white lg:h-[100vh] h-[95vh]  text-center justify-center">
				<div className="bg-[#56242A] self-center justify-center p-4 rounded-lg">
					<div>Registrar nuevo Anuncio</div>
					<div className="flex flex-col self-center w-80 m-4">
						<div>Titulo del Anuncio</div>

						<input
							className="mb-3 p-2 text-slate-800"
							placeholder="Titulo de el Anuncio"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						/>
						{!isValid.title && <div>Favor de ingresar un titulo valido</div>}

						<div>Cuerpo del Anuncio</div>
						<textarea
							className="mb-3 pb-10 p-2 text-slate-800"
							placeholder="Cuerpo"
							onChange={(e) => setBody(e.target.value)}
							value={body}
						/>
						{!isValid.body && <div>Favor de ingresar texto valido</div>}
						<div className="flex justify-items-center items-center space-x-6">
							<div className="mb-4">
								<Dropdown category={category} setCategory={setCategory} />
							</div>
							<p className="mb-4">{category}</p>
						</div>
						<button
							className="bg-[#9D2449] p-3 rounded-lg disabled:bg-red-400 transition-colors duration-300 hover:bg-[#B38E5D]"
							onClick={validateForm}
							title="Add Post"
							disabled={title === "" && body === ""}
						>
							Agregar Anuncio
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Dashboard.requireAuth = true;
