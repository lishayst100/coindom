import React from 'react'
import { benefits, benefits2 } from '../../services/benefits'
import SingleIcon from './SingleIcon'

const IconsList = () => {
    
  return (
    <div className="d-flex gap-5 container justify-content-center align-items-center flex-column flex-lg-row">
      <div className='d-flex flex-column gap-4'>
        {benefits.map((i) => (
          <SingleIcon {...i} />
        ))}
      </div>
      <img
        src="https://coindom-crypto-search.vercel.app/static/media/choose-main.39852b7511b28d44406f.png"
        alt=""
        height={340}
        width={240}
      />
      <div className='d-flex flex-column gap-4'>
        {benefits2.map((i,n) => (
          <SingleIcon {...i} key={n}/>
        ))}
      </div>
    </div>
  );
}

export default IconsList