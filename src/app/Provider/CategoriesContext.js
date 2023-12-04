"use client";
import { createContext, useContext, useState } from "react";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
	const [categoryList, setCategoryList] = useState([
		"Anuncios",
		"Actividades",
		"Eventos",
		"Novedades",
	]);

	const updateCategories = (newCat) => {
		setCategoryList(newCat);
	};

	return (
		<CategoriesContext.Provider value={{ categoryList, updateCategories }}>
			{children}
		</CategoriesContext.Provider>
	);
};

const useCategories = () => {
	return useContext(CategoriesContext);
};

export { useCategories };
