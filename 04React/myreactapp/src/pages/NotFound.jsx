import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-[80vh] bg-gray-100 flex items-center flex-col justify-center gap-6'>
        <h1 className='text-center text-6xl'>Not Found</h1>
        <h2 className='text-center text-6xl'>😭</h2>
        <p className='px-16 w-1/2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum natus fuga sequi? Officiis quas beatae quisquam. Odio quis delectus reiciendis adipisci minima perferendis sapiente. Cupiditate dolor vitae dolores officiis!</p>
        <button className='bg-white font-semibold py-4 px-10 rounded shadow'>
            <Link to="/">Go Back</Link>
        </button>
    </div>
  )
}

export default NotFound