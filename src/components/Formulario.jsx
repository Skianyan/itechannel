import React from 'react';

const Formulario = () => {
  return (
    <div className='w-full max-w-md flex-col lg:flex text-white flex justify-center items-center mx-auto'>

      <div className='bg-gray-700 m-4 w-full'>
        
        <div className='m-5'>
          <form className='text-left'>
            <div className='mb-4'>
              <label htmlFor='postTitle' className='block text-sm font-bold mb-2 text-white'>
                Post Title:
              </label>
              <input
                type='text'
                id='postTitle'
                name='postTitle'
                placeholder='Enter Post Title'
                className='w-full p-2 border rounded text-black'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='postName' className='block text-sm font-bold mb-2 text-white'>
                Post Name:
              </label>
              <input
                type='text'
                id='postName'
                name='postName'
                placeholder='Enter Post Name'
                className='w-full p-2 border rounded text-black'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='category' className='block text-sm font-bold mb-2 text-white'>
                Category:
              </label>
              <select id='category' name='category' className='w-full p-2 border rounded text-black'>
                <option value='category1'>Category 1</option>
                <option value='category2'>Category 2</option>
                <option value='category3'>Category 3</option>
              </select>
            </div>

            <div className='mb-4'>
              <label htmlFor='postDescription' className='block text-sm font-bold mb-2 text-white'>
                Post Description:
              </label>
              <textarea
                id='postDescription'
                name='postDescription'
                placeholder='Enter Post Description'
                className='w-full p-2 border rounded text-black'
                style={{ resize: 'none' }}
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-gray-500 text-white p-2 rounded hover:bg-gray-900'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
