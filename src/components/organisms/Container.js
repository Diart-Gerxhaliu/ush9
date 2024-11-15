import React from 'react'
import image from'../../assets/img/iamge.jpg'
import Box from '../molecules/Box'
const blog = [
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    },
    {
        image_src: image,
        alt: '',
        h1: 'Do Millenials Care About Saving?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna mi. Curabitur semper tellus semper blandit interdum. Nunc.',
        button:'Read More'
    }
]

function Container() {
  return (
    <div className='container'>
      {blog.map((blogs)=>
        <Box 
        image_src={blogs.image_src}
        image_alt={blogs.alt}
        h1={blogs.h1}
        text={blogs.text}
        button_text={blogs.button}
        />
      )}
    </div>
  )
}

export default Container
