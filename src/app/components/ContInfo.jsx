import React from "react";
import Image from "next/image";

const ContInfo = () => {
	return (
		<div className="w-full flex-col lg:flex bg-[#D4C19C] lg:text-white text-black  h-full ">
			<div className="bg-white mt-9 h-[25%] m-5  rounded-lg mr-[5vw] ">
				<div className="w-full h-full flex items-center justify-center">
					<Image src="/albatros.jpg" width={210} height={100} alt="logo" />
				</div>
			</div>

			<div className="bg-[#56242A] mt-3 h-[59%] m-5 justify-center text-center rounded-lg mr-[5vw] ">
				<div className="m-5 font-bold   text-2xl ">"Ite-Informamos" </div>
				<div className="m-5">¡Por Alumnos para Alumnos! </div>

				<ul className="m-4">
					<p>
						Este contenido es Official, libre de publicidad. Se creo con el fin
						de informar a la comunidad educativa
					</p>
				</ul>

				<ul className=" m-4">
					Creado por ingenieros en sistemas Computacionales 4SA.
				</ul>
			</div>
		</div>
	);
};

export default ContInfo;
