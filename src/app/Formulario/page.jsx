import React from 'react';
import Formulario from '@/components/Formulario';
import ContInfo from '@/components/ContInfo';

const Form = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center bg-slate-950 text-white font-serif  min-h-screen '>
     
      <div className='w-flex lg:w-3/4  '>
        <h1 className='text-2xl font-serif text-center  pt-20 my-1 lg:pt-0'>Registrar Contenido</h1>
        <div className="font-bold font-serif   lg:p-0  ">
          <Formulario />
        </div>
      </div>

      {/* ContInfo Section */}
      <div className='hidden lg:flex lg:w-1/4 max-w-full h-screen'>
        <ContInfo />
      </div>
    </div>
  );
}

export default Form;
