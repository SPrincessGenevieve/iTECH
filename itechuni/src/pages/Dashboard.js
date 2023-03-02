import Navbar from '../Navbar';
import React from 'react';
  
const Dashboard = () => {
  return (
    <>
    <Navbar></Navbar>
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Dashboard</h1>
    </div>
    </>
  );
};
  
export default Dashboard;