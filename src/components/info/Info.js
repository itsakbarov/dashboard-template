import React from 'react'
import './info.css'
const Info = () => {
    return (
        <>
         <div className='info'>
          <p>Number of Sales <img src='/sales.png' /> </p>
          <h1>1452</h1>
          <p><h4> 2.4%</h4>From previous period</p>
        </div>
        <div className='info'>
          <p>Sales Revenue <img src='/sales.png' /> </p>
          <h1>$ 38452</h1>
          <p><h4> 2.4%</h4>From previous period</p>
        </div>
        <div className='info'>
          <p>Average Price<img src='/sales.png' /> </p>
          <h1>$ 15.4</h1>
          <p><h4> 2.4%</h4>From previous period</p>
        </div>
        </>

    )
}

export default Info
