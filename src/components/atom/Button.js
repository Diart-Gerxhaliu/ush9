import React from 'react'

function Button({
    button_src,
    button_alt,
    button_text
}) {
  return (
    <div className='button'>
      <button type='button'>
        <img src={button_src} alt={button_alt} />
        <h3>{button_text}</h3>
      </button>
    </div>
  )
}

export default Button
