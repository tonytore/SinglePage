import React from 'react'

const Button = ({text,bgColor}:any) => {
  return (
    <div className={`w-80  cursor-pointer flex items-center justify-start ml-6 gap-6 mt-8 hover:bg-black hover:text-white border px-7 py-2 rounded-lg`}>
      <button className='flex justify-center'>{text}</button>
    </div>
  )
}

export default Button
