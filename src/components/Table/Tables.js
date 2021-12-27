import React,{useState} from 'react'
import {Table, Button } from 'antd'
import 'antd/dist/antd.css';
import './Table.css'
const Tables = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [];
  for (let i = 0; i < 6; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  const [ state, setState ] = useState({
    selectedRowKeys: [],
    loading: false
  });

 const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setState({ selectedRowKeys });
  };

    const rowSelection = {
      selectedRowKeys: state.selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = state.selectedRowKeys.length > 0;
  return (
    <div className='Table' >
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  </div>
  )
}
export default Tables

