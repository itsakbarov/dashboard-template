import React, { useState } from 'react'
import './Location.css'
const Location = () => {
  const [location ,setLocatin]  = useState(false)
  function setOpen () {
      setLocatin(!location)
  }
    return (
        <div className='location'>
            <div className='title'>
                <h1>Revenue by Locations</h1> 
                <img onClick={setOpen} src='/icons8-menu-vertical-24.png'/>
            </div>
            <div className={location ? 'for_more active':'for_more'} >
                <ul onClick={setOpen} >
                    <li>Sales Report</li>
                    <li>Export Report</li>
                    <li>Profit</li>
                    <li>Action</li>
                </ul>
            </div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.74398326364!2d69.13928073430084!3d41.28277055683598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1640116845865!5m2!1sen!2s" width="100%" height="282"  allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className='city'>
                <p>California : <h2>$ 2542</h2></p>
                <p>Texas : <h2>$ 2542</h2></p>
                <p>Montana : <h2>$ 2542</h2></p>
                <p>Nevada : <h2>$ 2542</h2></p>
            </div>
        </div>
    )
}
export default Location
