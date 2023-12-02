import Link from "next/link";
import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../utils/firebase";

const Main = async () => {
	const addUser = async () => {
		const user = await addDoc(collection(FIRESTORE_DB, "testcoll"), {
			name: "testname",
		});
	};
	return (
		<div>
			<button onClick={addUser()}>add test</button>
		</div>
	);
};

export default Main;
