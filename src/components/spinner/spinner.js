import React from 'react'

import './spinner.css';

const Spinner = () => {
    return (
        <div className="lds-csss ng-scope">
          <div className="lds-double-ring">
              <div></div>
              <div></div>
          </div>
            
        </div>
    )
}

export default Spinner;
