import React, { useState } from "react";
import { useCategories } from "../Provider/CategoriesContext";
const Dropdown = ({ category, setCategory }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleItemClick = (item) => {
		setCategory(item);
		setIsOpen(!isOpen);
	};
	const { categoryList, updateCategories } = useCategories();

	return (
		<div className="relative">
			<button
				onClick={toggleDropdown}
				className="bg-blue-500 text-white p-2 rounded-md focus:outline-none focus:shadow-outline"
			>
				Selecciona Categoria
			</button>

			{isOpen && (
				<div className="absolute mt-2 p-2 bg-white border rounded-md shadow-md">
					{console.log(categoryList)}
					{categoryList.map((cat, index) => {
						return (
							<button
								key={index}
								className="flex flex-col bg-slate-200 p-2"
								onClick={() => handleItemClick(cat)}
							>
								{cat}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
