import React from 'react';
import ContFotos1 from '@/components/ContFotos1';

const eventos = () => {
  return (
    <div className='flex flex-col lg:flex-row items-stretch justify-between'>
    <div className='w-full lg:w-3/4 flex bg-black text-white h-screen justify-center text-center '>
 <di className="font-bol  font-serif text-2xl mt-5 lg:hidden  "> Seccion Eventos </di>
    </div>
  
    <div className='hidden lg:flex lg:w-1/4 max-w-full h-screen'>
      <ContFotos1/>
    </div>
  </div>
  );
};

export default eventos;
