import React from 'react';

const LoginPage = () => {
  const login = () => {
   
  }

  return (
    <div className='flex flex-col justify-start items-center bg-slate-950 text-white font-serif min-h-screen '>

      <div className='text-3xl font-serif mt-44 mb-4 p-8'>Inicio de Sesión</div>

      <div className='bg-white text-black p-6 rounded-md lg:w-[34%] md:w-88 sm:w-77 mt-5'>
        <input 
          type="text" 
          placeholder='Introduce tu email'
          className='border border-black p-2 w-full mb-4'
        />

        <button 
          className='p-2 bg-black text-white rounded-md w-full'
          // onClick={login}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
