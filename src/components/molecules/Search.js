import React from 'react'
import Input from '../atom/Input'
import Button from '../atom/Button'

function Search({
    type,
    name,
    placeholder,
    button_src,
    button_alt,
    button_text
}) {
  return (
    <div className='search'>
      <Input 
      type={type} 
      name={name} 
      placeholder={placeholder}/>
      <Button 
      button_src={button_src} 
      button_alt={button_alt} 
      button_text={button_text}/>
    </div>
  )
}

export default Search
