import React,{useState} from 'react';
import Analytics from '../../components/analytics/Analytics';
import Revenue from '../../components/revenue/Revenue';
import Reports from '../../components/Reports/Reports';
import Sources from '../../components/sources/Sources';
import Activity from '../../components/Activity/Activity';
import Location from '../../components/Location/Location';
import Chat from '../../components/chat/Chat';
import Tables from '../../components/Table/Tables';
import Info from '../../components/info/Info';
import './dash.css'
const Dashboard = () => {

  return (
    <div className='detals'>
      <div className='details_item'>
        <Info/>
        <Revenue/>
        <Activity/>
        <Sources/>
      </div>
      <div className='tetail_item_two'>
        <Analytics/>
        <Reports/>
        <Location/>
      </div>
      <div className='detail_item_three'>
        <Chat/>
        <Tables/>
      </div>

  </div>
  )
};

export default Dashboard;
