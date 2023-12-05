import React from "react";
import Image from "next/image";

const ContInfo = () => {
  return (
    <div className="w-full flex-col  lg:flex bg-gray-800 text-white h-screen  ">
      <div className="bg-white mt-9 h-[22%] m-5 ">
        <div className="w-full h-full object-cover flex items-center justify-center">
          <Image
            src="/favicon.ico"
            width={210}
            height={100}
            alt="logo"
          />
        </div>
      </div>

      <div className="bg-gray-700 mt-3 h-[59%] m-5 justify-center text-center ">
        <div className="m-5 font-serif font-bold  text-2xl ">
          Ite-Informamos{" "}
        </div>
        <div className="m-5 font-serif font-bold">
          Por Alumnos para Alumnos{" "}
        </div>

        <ul className="m-4 font-serif">
          <p>
            Este contenido es Official,libre de publicidad. Se creo con el fin
            de Informar a la comunidad educativa
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
