import React from 'react'
import icon from './death-star.png';

import './error-msg.css';

const ErrorMsg = () => {
  return (
      <div className="error-msg">
        <img src={icon} alt="Icon error"/>
        <span className="oops">Oops :(</span>
        <span>Something has gone wrong</span>
      </div>
  )
}

export default ErrorMsg;
