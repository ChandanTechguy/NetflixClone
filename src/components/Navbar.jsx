import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 font-bold cursor-pointer text-4xl '>NETFLIX</h1>
      <div>
        <button className='text-white p-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointerr text-white'>Sign Up</button>

      </div>

    </div>
  )
}

export default Navbar
