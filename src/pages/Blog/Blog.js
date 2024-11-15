import React from 'react'
import Banner from '../../components/organisms/Banner'
import search from '../../assets/icon/search.svg'
import './Blog.css'
import Smaller from '../../components/templates/Smaller'

function Blog() {
  return (
    <div className='blog'>
      <Banner 
      h1={'News & Articles'}
      text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.'}
      type={'text'}
      name={'search'}
      placeholder={'Search Blog...'}
      button_src={search}
      button_alt={''}
      button_text={''}
      />
      <Smaller/>
    </div>
  )
}

export default Blog
