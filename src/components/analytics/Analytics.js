import React from 'react'
import './analytics.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Analytics = () => {
     const data = {
        labels: ['Red', 'Blue', 'Yellow', ],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div className='analytics'>
            <div className='title'>
                <h1>Sales Analytics</h1>
                <select className="selection">
                    <option>Apr</option>
                    <option value="1">Mar</option>
                    <option value="2">Feb</option>
                    <option value="3">Jan</option>
                </select>
            </div>
            <Doughnut data={data} />
            <div className='percent_os_data'>
                <p>Product A <h2>42%</h2> </p>
                <p>Product B <h2>42%</h2></p>
                <p>Product C <h2>42%</h2></p>
            </div>
        </div>
    )
}

export default Analytics
