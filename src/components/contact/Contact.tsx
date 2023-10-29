import React from 'react'
import Title from './Title'
import DiscordBtn from './DiscordBtn'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-5' id='join'>
        <Title/>
        <DiscordBtn/>
    </div>
  )
}

export default Contact