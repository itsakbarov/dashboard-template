import React,{useState} from 'react'
import "./Reports.css"
const Reports = () => {
  const [isActive, setIsactive] = useState(false)
  function change() {
    setIsactive(!isActive)
  }
    return (
        <div className='Reports'>
            <div className='title'>
                <h1>Earning Reports</h1>
                <img onClick={change} src='/icons8-menu-vertical-24.png'/>
            </div>
            <div className={isActive ? 'for_more active':'for_more'} >
                <ul onClick={change} >
                    <li>Sales Report</li>
                    <li>Export Report</li>
                    <li>Profit</li>
                    <li>Action</li>
                </ul>
            </div>
            <div className='Reports_details'>
                <p>Weekly Earnings<h2>$2,523</h2></p>
                <p>Monthly Earnings <h2>$11,235</h2></p>
            </div>
        </div>
    )
}

export default Reports
