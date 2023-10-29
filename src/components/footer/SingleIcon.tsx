import React from 'react'
import { IconType } from 'react-icons';
interface Props {
  icon: IconType;
}
const SingleIcon = ({icon}:Props) => {
    const IconComponent = icon
  return (
    <IconComponent className='icons'/>
  )
}

export default SingleIcon