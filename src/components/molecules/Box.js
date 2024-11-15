import React from 'react'
import Image from '../atom/Image'
import Heading from '../atom/Heading'
import Text from '../atom/Text'
import Button from '../atom/Button'

function Box({
    image_src,
    image_alt,
    h1,
    text,
    button_text
}) {
  return (
    <div className='box'>
      <Image 
      image_src={image_src}
      image_alt={image_alt}/>
      <Heading text={h1}/>
      <Text text={text}/>
      <Button button_text={button_text}/>
    </div>
  )
}

export default Box
