import React from 'react';

const LoginPage = () => {
  const login = () => {
   
  }

  return (
    <div className='flex flex-col justify-center items-center bg-slate-950 text-white font-serif h-screen'>

      <div className='text-3xl font-serif mb-4 p-8'>Inicio de Sesión</div>

      <div className='bg-white text-black p-6 rounded-md w-full max-w-md '>
        <input 
          type="text" 
          placeholder='Introduce tu email'
          className='border border-black p-2 w-full mb-4'
        />

        <button 
          className='p-2 bg-black text-white rounded-md w-full'
          onClick={login}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
