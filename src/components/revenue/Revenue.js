import React from 'react'

import './revenue.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

const Revenue = () => {
    return (
        <div className='revenue'>
            <div className='title'>
                <h1>Revenue Analytics</h1>
                    <div className="period_method">
                        <input className="period" type="radio" name="payment" id="Credit" />
                        <label htmlFor="Credit"><a>  Today</a></label>
                        <input className="period"  type="radio" name="payment" id="Paypal" />
                        <label htmlFor="Paypal"><a>  Weekly</a></label>
                        <input className="period"  type="radio" name="payment" id="Cash" />
                        <label htmlFor="Cash"><a> Monthly</a></label>
                    </div>
                </div>
                <Line options={options} data={data} />
            <div className='revenue_details'>
                <span>
                    <p>This month</p>
                    <h2>$12,253 <p> 2.2 %</p></h2>
                </span>
                <span>
                    <p>This Year:</p>
                    <h2>$ 34,254<p> 2.2 %</p></h2>
                </span>
                <span>
                    <p>Previous Year:</p>
                    <h2>$ 32,695 <p> 2.2 %</p></h2>
                </span>
            </div>
        </div>
    )
}

export default Revenue
