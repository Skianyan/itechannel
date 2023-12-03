// "use client";
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "firebase/auth";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
// 	const [user, setUser] = useState(null);

// 	useEffect(() => {
// 		const unsubscribe = auth.onAuthStateChanged((user) => {
// 			setUser(user);
// 		});

// 		// Cleanup subscription on unmount
// 		return () => unsubscribe();
// 	}, []);

// 	return (
// 		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
// 	);
// };

// export const useAuth = () => {
// 	return useContext(AuthContext);
// };
