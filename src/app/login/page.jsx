import React from 'react';

const loginPage = () => {
  const login = () => {
    
  }

  return (
    <div className='flex justify-center align-middle mt-10'>
        <input 
            type="text" 
            placeholder='Introduce tu email'
            className='border border-black'
        />
        <button 
            className='p-1 bg-blue-300'
            onClick={login}
        >Ingresar</button>

    </div>
  )
}

export default loginPage