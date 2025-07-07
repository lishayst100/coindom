import React from 'react'
import { benefits, benefits2 } from '../../services/benefits'
import SingleIcon from './SingleIcon'

const IconsList = () => {
    
  return (
    <div className="d-flex gap-5 container justify-content-center align-items-center flex-column flex-lg-row">
      <div className="d-flex flex-column gap-4">
        {benefits.map((i) => (
          <SingleIcon {...i} key={i.title} />
        ))}
      </div>
      <img
        src="https://res.cloudinary.com/dlkhrcm4x/image/upload/v1751886787/ethereum-6903894_640_f9deuo.png"
        alt=""
        height={340}
        width={240}
      />
      <div className="d-flex flex-column gap-4">
        {benefits2.map((i, n) => (
          <SingleIcon {...i} key={n} />
        ))}
      </div>
    </div>
  );
}

export default IconsList