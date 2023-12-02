import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "@/utils/firebase";

const addUser = async () => {
    const user = await addDoc(collection(FIRESTORE_DB, "testcoll"), {
        name: "hola",
    });
};

export default addUser;