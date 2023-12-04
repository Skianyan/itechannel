import Link from "next/link";
import React from "react";
import ContInfo from "@/components/ContInfo";

const Main = () => {
  return (
    <div className='flex flex-col lg:flex-row items-stretch justify-between'>
      <div className='w-full lg:w-3/4 flex bg-black text-white h-screen justify-center text-center '>
	 <di className="font-bol  font-serif text-2xl mt-5 lg:hidden  "> Ite-Informamos </di>
      </div>
    
      <div className='hidden lg:flex lg:w-1/4 max-w-full h-screen'>
        <ContInfo />
      </div>
    </div>
  );
};

export default Main;