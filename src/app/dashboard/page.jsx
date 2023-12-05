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
    <div className="w-full max-w-md flex-col lg:flex text-white flex justify-center items-center mx-auto">
      <div className="bg-gray-700 m-4 w-full">
        <div className="m-5">
          <form className="text-left">
            <div className="mb-4">
              <div>Registrar nuevo post</div>

              <label
                htmlFor="postTitle"
                className="block text-sm font-bold mb-2 text-white"
              >
                Titulo del post
              </label>
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                placeholder="Enter Post Title"
                className="w-full p-2 border rounded text-black"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              {!isValid.title && <div>Favor de ingresar un titulo valido</div>}
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-bold mb-2 text-white"
              >
                Categoria
              </label>
              <div
                id="category"
                name="category"
                className="w-full p-2 border rounded text-black"
              >
                <Dropdown category={category} setCategory={setCategory} />
              </div>
              <p>{category}</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="postDescription"
                className="block text-sm font-bold mb-2 text-white"
              >
                Contenido del post
              </label>
              <textarea
                id="postDescription"
                name="postDescription"
                placeholder="Enter Post Description"
                className="w-full p-2 border rounded text-black"
                style={{ resize: "none" }}
                onChange={(e) => setBody(e.target.value)}
                value={body}
              ></textarea>
              {!isValid.body && <div>Favor de ingresar texto valido</div>}
            </div>

            <button
              type="submit"
              className="bg-gray-500 text-white p-2 rounded hover:bg-gray-900"
              onClick={validateForm}
              title="Add Post"
              disabled={title === "" && body === ""}
            >
              Añadir post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Dashboard.requireAuth = true;
