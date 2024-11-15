import React from 'react'
import Heading from '../atom/Heading'
import Text from '../atom/Text'
import Search from '../molecules/Search'

function Banner({
    h1,
    text,
    type,
    name,
    placeholder,
    button_src,
    button_alt,
    button_text
}) {
  return (
    <div className='banner'>
      <Heading text={h1}/>
      <Text text={text}/>
      <Search 
      type={type} 
      name={name}
      placeholder={placeholder}
      button_src={button_src}
      button_alt={button_alt}
      button_text={button_text}/>
    </div>
  )
}

export default Banner
