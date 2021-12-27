import React,{useState} from 'react'
import './sources.css'
const Sources = () => {
    const [ sourse, setsours] = useState(false)

    function changeSours() {
      setsours(!sourse)
    }
    return (
        <div className='sources'>
            <div className='title'>
                <h1>Sources</h1>
                <img onClick={changeSours} src='/icons8-menu-vertical-24.png'/>
            </div>
            <div className={sourse ? 'for_more active':'for_more'} >
                <ul onClick={changeSours} >
                    <li>Sales Report</li>
                    <li>Export Report</li>
                    <li>Profit</li>
                    <li>Action</li>
                </ul>
            </div>
            <div className='total'>
                <p>Total sources</p>
                <h1>$ 7652</h1>
                <p>2.2 %</p>
                <span>
                    <img src="/icons8-fantastic-four-30.png"/>
                    <h2>Source 1</h2>
                    <p>$ 2478</p>
                </span>
                <span>
                <img src="/icons8-fantastic-four-30.png"/>
                    <h2>Source 2</h2>
                    <p>$ 2478</p>
                </span>
                <span>
                <img src="/icons8-fantastic-four-30.png"/>
                    <h2>Source 3</h2>
                    <p>$ 2478</p>
                </span>
                <button>View more</button>
            </div>
        </div>
    )
}

export default Sources
