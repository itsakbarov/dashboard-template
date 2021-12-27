import React, { useState } from 'react'
import './Activity.css'
const Activity = () => {
   const[active, setActive]=useState(false)
   function add() {
    setActive(!active)
   }
    return (
        <div className='Activity'>
            <div className='title'>
                <h1>Recent Activity Feed</h1>
                <img onClick={add} src='/icons8-menu-vertical-24.png'/>
            </div>
            <div className={active ? 'for_more active':'for_more'} >
                <ul onClick={add} >
                    <li>Sales Report</li>
                    <li>Export Report</li>
                    <li>Profit</li>
                    <li>Action</li>
                </ul>
            </div>
            <div className='recent_activity'>
                <ul>
                    <li><img src='/icons8-fantastic-four-30.png'/><span><i><h1>28 Apr, 2020</h1><p>12:07 am</p></i>Responded to need “Volunteer Activities”</span> </li>
                    <li><img src='/icons8-fantastic-four-30.png'/><span><i><h1>28 Apr, 2020</h1><p>12:07 am</p></i>Responded to need “Volunteer Activities”</span> </li>
                    <li><img src='/icons8-fantastic-four-30.png'/><span><i><h1>28 Apr, 2020</h1><p>12:07 am</p></i>Responded to need “Volunteer Activities”</span> </li>
                    <li><img src='/icons8-fantastic-four-30.png'/><span><i><h1>28 Apr, 2020</h1><p>12:07 am</p></i>Responded to need “Volunteer Activities”</span> </li>
                    <li><img src='/icons8-fantastic-four-30.png'/><span><i><h1>28 Apr, 2020</h1><p>12:07 am</p></i>Responded to need “Volunteer Activities”</span> </li>
                    <li><img src='/icons8-fantastic-four-30.png'/><span><i><h1>28 Apr, 2020</h1><p>12:07 am</p></i>Responded to need “Volunteer Activities”</span> </li>
                </ul>
            </div>
        </div>
    )
}

export default Activity
