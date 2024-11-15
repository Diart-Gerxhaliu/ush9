import React from 'react'

function Input({
    type,
    name,
    placeholder
}) {
  return (
    <div className='input'>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default Input
