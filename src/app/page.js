import Link from "next/link";
import React from "react";
import ContInfo from "@/components/ContInfo";
import Formulario from "@/components/Formulario";

const Main = () => {
  return (
    <div className='flex flex-col lg:flex-row items-stretch justify-between'>
      <div className='w-full lg:w-3/4 flex bg-black text-white h-screen justify-center text-center '>
        // mostrar informacion  ya registrada 
      </div>
    
      <div className='hidden lg:flex lg:w-1/4 max-w-full h-screen'>
        <ContInfo />
      </div>
    </div>
  );
};

export default Main;
