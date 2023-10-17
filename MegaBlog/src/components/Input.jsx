import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props
}, ref) {
  const id = useId();

  return (
    <div className='w-full '>
      {label && <label className='inline-block mb-1 pl-1 text-lg font-semibold' htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-[#93B1A6] text-[#040D12] outline-none focus:bg-gray-50 duration-200  w-full shadow-xl ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  )
})

export default Input