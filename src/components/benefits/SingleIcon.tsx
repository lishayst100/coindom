import React from 'react'
import { IconType } from 'react-icons/lib'

interface IconProps {
    icon:IconType;
    title:string;
    details:string
}


const SingleIcon = ({details,icon,title}:IconProps) => {
    const IconComponent = icon;
  return (
    <div className='choose-box p-3'>
      <IconComponent className="choose-icon colorful-bgc" />
      <div>
        <h5 className="choose-title font-bolder">{title}</h5>
        <p className="choose-detials">{details}</p>
      </div>
    </div>
  );
}

export default SingleIcon