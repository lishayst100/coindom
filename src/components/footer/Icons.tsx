import React from 'react'
import {FaFacebookF, FaTwitter,FaDiscord,FaYoutube} from 'react-icons/fa'
import SingleIcon from './SingleIcon';
const Icons = () => {
    const arr = [FaFacebookF, FaTwitter, FaDiscord, FaYoutube];
  return (
    <div className='d-flex justify-content-center align-items-center gap-3'>
      {arr.map((i, index) => (
        <SingleIcon icon={i} key={index} />
      ))}
    </div>
  );
}

export default Icons